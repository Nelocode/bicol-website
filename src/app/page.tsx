import { getServices, getClients } from '@/app/actions'
import Link from 'next/link'
import ConversationalForm from '@/components/ConversationalForm'
import ScrollToTop from '@/components/ScrollToTop'
import { ArrowRight, CheckCircle, Smartphone, Globe, BarChart, Users, Zap, Award } from 'lucide-react'
import Image from 'next/image'

export const dynamic = 'force-dynamic';

export default async function Home() {
  const services = await getServices()
  const clients = await getClients()

  return (
    <main style={{ overflowX: 'hidden' }}>
      <ScrollToTop />

      {/* Dynamic Stripe-like Hero */}
      <section className="stripe-hero-bg" style={{ padding: '10rem 0 8rem' }}>
        {/* Background Image Overlay - Restored & Subtle */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.05 }}>
          <Image
            src="/hero-bg.png"
            alt="Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
        </div>

        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 10 }}>

          <div>
            <span style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(255,255,255,0.1)',
              borderRadius: '99px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '2rem',
              backdropFilter: 'blur(5px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              🚀 Evolución Tecnológica Integral
            </span>
            <h1 style={{
              fontSize: 'clamp(3rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              Impulsamos tu <br />
              <span className="gradient-text" style={{
                background: 'linear-gradient(to right, #00d4ff, #ffffff)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text'
              }}>transformación digital</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '2.5rem',
              maxWidth: '550px',
              lineHeight: 1.6
            }}>
              Más de 10 años acompañando a líderes técnicos, jefes de área y gerentes en su evolución, traduciendo tecnología en valor tangible para tu negocio.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/servicios" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                Ver Servicios <ArrowRight size={18} />
              </Link>
              <a href="#contacto" className="btn btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1.1rem' }}>
                Hablar con un consultor
              </a>
            </div>

            <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', opacity: 0.8, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Users size={20} /> <span style={{ fontWeight: 600 }}>Experiencia Técnica</span>
              </div>
              <div style={{ width: '1px', height: '20px', background: 'white', opacity: 0.5 }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Zap size={20} /> <span style={{ fontWeight: 600 }}>Visión Estratégica</span>
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Main Feature Coded UI */}
            <div className="glass-card animate-float" style={{
              width: '100%',
              maxWidth: '450px',
              padding: '2rem',
              position: 'relative',
              zIndex: 5,
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', fontFamily: 'monospace' }}>status: active</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
                  <BarChart color="#00d4ff" size={24} style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>+127%</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Eficiencia</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '8px' }}>
                  <Users color="#ff0080" size={24} style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>10k+</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Usuarios</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '1rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }}></div>
                  <div style={{ width: '60%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                </div>
                <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '1rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(0,212,255,0.4)' }}></div>
                  <div style={{ width: '40%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                </div>
                <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', display: 'flex', alignItems: 'center', padding: '0 1rem', gap: '1rem' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(255,0,128,0.4)' }}></div>
                  <div style={{ width: '75%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Us Section */}
      <div style={{ marginTop: '-4rem', position: 'relative', zIndex: 20 }}>
        <section className="diagonal-section">
          <div className="container diagonal-content">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
              <div style={{ position: 'relative', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                <Image
                  src="/team.png"
                  alt="Equipo Bicol"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  right: '2rem',
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Desde 2015</h4>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                    Hemos ayudado a empresas de todos los tamaños a evolucionar sus procesos y crear experiencias memorables.
                  </p>
                </div>
              </div>

              <div>
                <h2 style={{ fontSize: '1rem', color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  ¿Quiénes somos?
                </h2>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                  Consultores apasionados por la tecnología y el impacto.
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--slate)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  <p>
                    Bicol nació como la visión compartida de dos emprendedores. A lo largo de más de una década, hemos participado en proyectos de transformación digital en sectores como <strong>comercio, educación, salud, manufactura y servicios</strong>.
                  </p>
                  <p>
                    Creemos que la innovación tecnológica debe ser <strong>accesible, humana y estratégica</strong>. Por eso trabajamos de cerca con tu equipo para comprender a fondo sus desafíos.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Award color="var(--primary)" /> <span>Equipo Multidisciplinario</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <Globe color="var(--primary)" /> <span>Alcance Nacional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Services Section */}
      <section style={{ padding: '8rem 0', background: '#f6f9fc' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              Nuestros Servicios
            </h2>
            <h3 style={{ fontSize: '3rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.1 }}>
              Soluciones enfocadas en acelerar tu negocio en cada etapa.
            </h3>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {services.length > 0 ? services.map(service => (
              <Link href={`/servicios/${service.slug}`} key={service.id} className="glass-card" style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                textDecoration: 'none',
                height: '100%',
                justifyContent: 'space-between',
                background: 'white',
                border: 'none',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                <div>
                  {service.coverImage ? (
                    <div style={{ height: '200px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                      <img src={service.coverImage} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ) : (
                    <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: 'var(--mesh-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: 'white' }}>
                      <Zap size={28} />
                    </div>
                  )}
                  <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{service.title}</h4>
                  <p style={{ color: 'var(--slate)', lineHeight: 1.6 }}>{service.shortDescription}</p>
                </div>
                <div style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  Conocer más <ArrowRight size={16} />
                </div>
              </Link>
            )) : (
              [1, 2, 3].map(i => (
                <div key={i} className="glass-card" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderStyle: 'dashed' }}>
                  <p style={{ color: 'var(--slate)' }}>Cargando servicios...</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section style={{ padding: '6rem 0', background: 'white' }}>
        <div className="container">
          <p style={{ textAlign: 'center', fontWeight: 600, color: 'var(--slate)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Nuestros Clientes
          </p>
          <h3 style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem', fontSize: '1.5rem', color: 'var(--text-main)' }}>
            Empresas que han confiado en nosotros para impulsar su transformación digital.
          </h3>

          {clients.length > 0 ? (
            <div className="logo-grid">
              {clients.map(client => (
                <div key={client.id} style={{ width: '140px', height: '80px', position: 'relative' }}>
                  <img src={client.logo} alt={client.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="logo-grid" style={{ opacity: 0.3 }}>
              {/* Fallback */}
              {['Google', 'Amazon', 'Stripe', 'Microsoft'].map(t => (
                <span key={t} style={{ fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase' }}>{t}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact / Lead Gen Section */}
      <section id="contacto" style={{ padding: '8rem 0 10rem', background: 'var(--dark-bg)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle Background Image for Contact */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.1, mixBlendMode: 'overlay' }}>
          <Image
            src="/hero-bg.png"
            alt="Background"
            fill
            style={{ objectFit: 'cover', transform: 'rotate(180deg)' }}
          />
        </div>

        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle at 50% 50%, rgba(99,91,255,0.15), transparent 70%)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 450px)', gap: '6rem', alignItems: 'flex-start' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Hablemos de tu futuro</h2>
            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', lineHeight: 1.6 }}>
              Estamos convencidos de que una buena asesoría tecnológica no solo resuelve problemas actuales, sino que sienta las bases para el crecimiento futuro.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              <div>
                <CheckCircle color="var(--secondary)" size={24} style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Estrategia a la medida</h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>Entendemos tus retos específicos.</p>
              </div>

              <div style={{ opacity: 0.9, marginTop: '2rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', background: 'rgba(255,255,255,0.03)' }}>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', marginBottom: '0.5rem' }}>CONTÁCTANOS DIRECTAMENTE</p>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>📧 johanalfr@gmail.com</p>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>📞 +57 (601) 7640640</p>
                <p style={{ fontSize: '1.1rem' }}>📍 Cll 77 No. 15-03 Of. 402 – Bogotá</p>
              </div>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '4px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
          }}>
            <div style={{ background: '#f6f9fc', borderRadius: '12px', overflow: 'hidden' }}>
              <ConversationalForm />
            </div>
          </div>
        </div>
      </section>

      {/* Diagonal Footer with Particles */}
      <footer className="diagonal-footer">
        {/* Animated Particles */}
        <div className="particle-container">
          {/* Hardcoded particles with different delays/positions */}
          <div className="particle-line" style={{ left: '20%', animationDelay: '0s', height: '150px' }}></div>
          <div className="particle-line" style={{ left: '50%', animationDelay: '1.5s', height: '80px' }}></div>
          <div className="particle-line" style={{ left: '80%', animationDelay: '0.5s', height: '120px' }}></div>
          <div className="particle-line" style={{ left: '35%', animationDelay: '2s', height: '60px' }}></div>
        </div>

        <div className="container diagonal-footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', position: 'relative', zIndex: 10 }}>
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <Image src="/logo.png" alt="BICOL Logo" width={120} height={40} style={{ objectFit: 'contain' }} />
            </div>
            <p style={{ color: 'var(--slate)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Transformando tecnología en valor para tu negocio desde 2015.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Servicios</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--slate)', fontSize: '0.9rem' }}>
              <Link href="/servicios">Consultoría</Link>
              <Link href="/servicios">Desarrollo</Link>
              <Link href="/servicios">Transformación Digital</Link>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Contacto</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--slate)', fontSize: '0.9rem' }}>
              <span>Cll 77 No. 15-03 Of. 402</span>
              <span>Bogotá, Colombia</span>
              <span>+57 (601) 7640640</span>
              <span>johanalfr@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="container diagonal-footer-content" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e0e6eb', textAlign: 'center', color: 'var(--slate)', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} BICOL S.A.S. Todos los derechos reservados.
        </div>
      </footer>
    </main>
  )
}
