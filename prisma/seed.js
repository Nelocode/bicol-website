const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    // Create first service
    const service = await prisma.service.create({
        data: {
            title: 'Consultoría en Estrategia Digital',
            slug: 'consultoria-estrategia-digital',
            shortDescription: 'Diseñamos la hoja de ruta para la transformación tecnológica de tu empresa.',
            longDescription: `
        <p>En BICOL, entendemos que la tecnología es solo el medio para alcanzar tus objetivos de negocio. Nuestro servicio de consultoría estratégica está diseñado para alinear tus iniciativas digitales con tu visión empresarial.</p>
        
        <h3>¿Qué incluye nuestro servicio?</h3>
        <ul>
          <li><strong>Diagnóstico de madurez digital:</strong> Evaluamos tu infraestructura, procesos y cultura actual.</li>
          <li><strong>Hoja de ruta personalizada:</strong> Definimos prioridades claras y pasos accionables.</li>
          <li><strong>Selección de tecnologías:</strong> Te ayudamos a elegir las herramientas adecuadas (Cloud, IA, ERP, CRM) sin sesgos de proveedor.</li>
        </ul>
        
        <h3>Beneficios clave</h3>
        <p>Al implementar una estrategia digital sólida, tu empresa podrá reducir costos operativos hasta un 30% y acelerar el tiempo de lanzamiento de nuevos productos.</p>
      `,
            coverImage: '/hero-bg.png', // Reusing existing image as placeholder
        },
    })

    // Create first client
    const client = await prisma.client.create({
        data: {
            name: 'Empresa Líder',
            logo: '/favicon.ico', // Placeholder using standard next favicon or we could use an existing upload
        },
    })

    console.log({ service, client })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
