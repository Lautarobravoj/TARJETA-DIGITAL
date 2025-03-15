import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Image src="/perfil.jpg" alt="Mi Foto" width={150} height={150} style={{ borderRadius: '50%' }} />
      <h1>Tu Nombre</h1>
      <h2>Tu Negocio</h2>
      <p>Breve descripción de tu trabajo</p>

      <section style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Servicios</h2>
        <ul>
          <li>🔧 Reparaciones</li>
          <li>🏗 Remodelaciones</li>
          <li>🏠 Construcción</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Contacto</h2>
        <a href="tel:+34624113764">📞 Llamar</a> | 
        <a href="https://wa.me/34624113764">💬 WhatsApp</a> | 
        <a href="https://maps.google.com/?q=Ubicacion">📍 Ubicación</a>
      </section>

      <footer style={{ textAlign: 'center', padding: '20px' }}>
        <p>© 2025 Mi Negocio</p>
      </footer>
    </div>
  );
}
