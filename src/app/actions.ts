'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

async function uploadFile(file: File): Promise<string> {
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Ensure uploads directory exists
    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadDir, { recursive: true })

    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`
    const filepath = path.join(uploadDir, filename)

    await writeFile(filepath, buffer)
    return `/uploads/${filename}`
}

export async function createService(formData: FormData) {
    const title = formData.get('title') as string
    const slug = formData.get('slug') as string
    const shortDescription = formData.get('shortDescription') as string
    const longDescription = formData.get('longDescription') as string
    const file = formData.get('coverImage') as File

    if (!title || !slug || !shortDescription) {
        throw new Error('Missing required fields')
    }

    let coverImage = ''
    if (file && file.size > 0) {
        coverImage = await uploadFile(file)
    }

    await prisma.service.create({
        data: {
            title,
            slug,
            shortDescription,
            longDescription,
            coverImage
        }
    })

    revalidatePath('/servicios')
    revalidatePath('/admin')
}

export async function createClient(formData: FormData) {
    const name = formData.get('name') as string
    const file = formData.get('logo') as File

    if (!name || !file) {
        throw new Error('Missing required fields')
    }

    const logo = await uploadFile(file)

    await prisma.client.create({
        data: {
            name,
            logo
        }
    })

    revalidatePath('/clientes')
    revalidatePath('/admin')
}

export async function createLead(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    await prisma.lead.create({
        data: {
            name,
            email,
            message,
        }
    })
}

export async function getServices() {
    return await prisma.service.findMany({
        orderBy: { createdAt: 'desc' }
    })
}

export async function getService(slug: string) {
    return await prisma.service.findUnique({
        where: { slug }
    })
}

export async function getClients() {
    return await prisma.client.findMany({
        orderBy: { createdAt: 'desc' }
    })
}
