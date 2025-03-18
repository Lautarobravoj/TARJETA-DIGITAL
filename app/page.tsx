"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
      {/* Sección de Perfil */}
      <div className="profile">
        <Image src="/perfil.jpg" alt="Foto de perfil" width={150} height={150} className="profile-pic" />
        <h1>Tu Nombre</h1>
        <h2>Tu Negocio</h2>
        <p>Descripción breve sobre tu trabajo y lo que ofreces.</p>
      </div>

      {/* Sección de Servicios con Carrusel */}
      <div className="services">
        <h2>Nuestros Servicios</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="service-card">
              <Image src="/servicio1.jpg" alt="Servicio 1" width={300} height={200} />
              <h3>Servicio 1</h3>
              <p>Descripción del servicio 1.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-card">
              <Image src="/servicio2.jpg" alt="Servicio 2" width={300} height={200} />
              <h3>Servicio 2</h3>
              <p>Descripción del servicio 2.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="service-card">
              <Image src="/servicio3.jpg" alt="Servicio 3" width={300} height={200} />
              <h3>Servicio 3</h3>
              <p>Descripción del servicio 3.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Sección de Contacto */}
      <div className="contact">
        <h2>Contacto</h2>
        <div className="contact-buttons">
          <a href="tel:+123456789" className="btn">📞 Llamar</a>
          <a href="https://wa.me/123456789" className="btn">💬 WhatsApp</a>
          <a href="https://maps.google.com/?q=Tu+Ubicación" className="btn">📍 Ubicación</a>
        </div>
      </div>
    </div>
  );
}
