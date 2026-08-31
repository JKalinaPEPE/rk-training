"use client";
import { useEffect, useState } from "react";

const wa =
  "https://wa.me/59895033455?text=Hola%20Rodrigo%20%F0%9F%91%8B%20Vi%20la%20p%C3%A1gina%20de%20RK%20Training%20y%20me%20gustar%C3%ADa%20coordinar%20una%20evaluaci%C3%B3n%20inicial%20gratuita.";
const PRESENCIAL_DESDE = "3.500";
const goals = [
  [
    "dumbbell",
    "Ganar masa muscular",
    "Desarrollá fuerza y musculatura de manera progresiva.",
    "Hola Rodrigo, estuve viendo RK Training y estoy interesado/a en empezar. Mi principal objetivo es ganar masa muscular. Quisiera saber cómo podemos comenzar.",
  ],
  [
    "flame",
    "Reducir grasa",
    "Un plan adaptado a tus objetivos y nivel actual.",
    "Hola Rodrigo, estuve viendo RK Training y estoy interesado/a en empezar. Mi principal objetivo es reducir grasa. Quisiera saber cómo podemos comenzar.",
  ],
  [
    "start",
    "Empezar a entrenar",
    "Ideal si nunca fuiste al gimnasio o no sabés cómo organizarte.",
    "Hola Rodrigo, estuve viendo RK Training y quiero empezar a entrenar. Me gustaría recibir orientación para comenzar correctamente.",
  ],
  [
    "progress",
    "Mejorar tu físico",
    "Progresá sin necesidad de vivir dentro del gimnasio.",
    "Hola Rodrigo, estuve viendo RK Training y estoy interesado/a en mejorar mi físico. Quisiera saber qué modalidad me recomendarías.",
  ],
];
const faqs = [
  [
    "¿Necesito experiencia previa?",
    "No. Los entrenamientos se adaptan tanto a principiantes como a personas que ya entrenan.",
  ],
  [
    "¿Dónde son los entrenamientos presenciales?",
    "Rodrigo se traslada al gimnasio del cliente, principalmente en La Teja, Paso Molino, Prado y Aires Puros.",
  ],
  [
    "¿Puedo entrenar desde mi casa?",
    "Sí. Con el plan online se diseña un entrenamiento según tus objetivos y el equipamiento disponible.",
  ],
  ["¿Cómo se realiza el seguimiento?", "Principalmente mediante WhatsApp."],
  [
    "¿Cada cuánto cambia la rutina?",
    "Depende de tu evolución, tus objetivos y tus necesidades.",
  ],
  [
    "¿RK Training ofrece planes de alimentación?",
    "No. Rodrigo es Entrenador Personal y no nutricionista.",
  ],
  [
    "¿La primera consulta tiene costo?",
    "No. La evaluación inicial es gratuita.",
  ],
  [
    "¿Qué días trabaja Rodrigo?",
    "De lunes a viernes, aproximadamente de 7:00 a 15:00.",
  ],
];
const Check = ({ children }: { children: React.ReactNode }) => (
  <li>
    <b>✓</b>
    {children}
  </li>
);
const GoalIcon = ({ name }: { name: string }) => {
  const p = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "dumbbell")
    return (
      <svg {...p}>
        <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12" />
      </svg>
    );
  if (name === "flame")
    return (
      <svg {...p}>
        <path d="M12.5 3.5c.5 3-1.7 4.2-2.5 6.4-.6 1.7.1 3.1 1.8 3.8-.2-2.1 1.2-3.2 2.5-4.5 2 1.5 3.2 3.6 3.2 6A5.5 5.5 0 0 1 6.5 15c0-3.4 2.1-6 6-11.5Z" />
      </svg>
    );
  if (name === "start")
    return (
      <svg {...p}>
        <circle cx="8" cy="6" r="2.2" />
        <path d="M4.5 20v-4.2c0-2.2 1.5-4 3.5-4s3.5 1.8 3.5 4V20M14 13h7M15.5 10.5v5M19.5 10.5v5" />
      </svg>
    );
  return (
    <svg {...p}>
      <path d="M4 18 9 13l3 3 7-8M14 8h5v5M4 5v13h16" />
    </svg>
  );
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const ids = ["inicio", "servicios", "proceso", "rodrigo", "planes", "formacion", "faq"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.35] },
    );
    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const navItems = [
    ["inicio", "Inicio"], ["servicios", "Servicios"],
    ["proceso", "Cómo funciona"], ["rodrigo", "Sobre mí"],
    ["planes", "Planes"], ["formacion", "Formación"], ["faq", "Preguntas"],
  ];
  return (
    <>
      <header>
        <nav className="nav shell">
          <a className="brand" href="#inicio">
            <img src="/assets/rk-logo.jpeg" alt="Logo de RK Training" />
            <span>
              <strong>RK</strong> TRAINING<small>PERSONAL TRAINER</small>
            </span>
          </a>
          <button
            className="hamb"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
          <div
            className={`links ${open ? "open" : ""}`}
            onClick={() => setOpen(false)}
          >
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""} aria-current={activeSection === id ? "location" : undefined}>
                {label}
              </a>
            ))}
          </div>
          <a className="btn navbtn" href={wa}>
            Evaluación gratis
          </a>
        </nav>
      </header>

      <main>

      <section className="hero" id="inicio">
        <img
          className="heroimg"
          src="/assets/rodrigo-hero.jpeg"
          alt="Rodrigo Kalina, entrenador personal en Montevideo, entrenando en gimnasio"
        />
        <div className="shade" />
        <div className="shell heroText">
          <p className="eyebrow">
            <i /> Entrenamiento personal · Montevideo
          </p>
          <h1>
            Construí un cuerpo
            <br />
            <em>más fuerte.</em>
          </h1>
          <h2>Con un entrenamiento hecho para vos.</h2>
          <p className="lead">
            Entrenamiento personal presencial y online, con planificación
            personalizada y seguimiento durante todo el proceso.
          </p>
          <div className="actions">
            <a className="btn" href={wa}>
              Agendar evaluación gratis ↗
            </a>
            <a className="btn ghost" href="#planes">
              Ver planes
            </a>
          </div>
          <div className="facts">
            <span>✓ Evaluación sin costo</span>
            <span>✓ Sin compromiso</span>
            <span>✓ Atención directa con Rodrigo</span>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="sectionHead">
          <div>
            <p className="eyebrow">
              <i /> Tu objetivo, nuestro punto de partida
            </p>
            <h2>
              ¿Qué querés <em>conseguir?</em>
            </h2>
          </div>
          <p>
            No existe una rutina universal. Empezamos por vos: tu experiencia,
            disponibilidad y el resultado que querés lograr.
          </p>
        </div>
        <div className="goalGrid">
          {goals.map((g, i) => (
            <a className="goalCard" key={g[1]} href={`https://wa.me/59895033455?text=${encodeURIComponent(g[3])}`} target="_blank" rel="noopener noreferrer" aria-label={`${g[1]}: consultar a Rodrigo por WhatsApp`}>
              <small>0{i + 1}</small>
              <b className="goalIcon">
                <GoalIcon name={g[0]} />
              </b>
              <h3>{g[1]}</h3>
              <p>{g[2]}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section band" id="servicios">
        <div className="shell">
          <div className="sectionHead">
            <div>
              <p className="eyebrow">
                <i /> Dos modalidades, un mismo compromiso
              </p>
              <h2>
                Entrenamiento <em>adaptado a vos.</em>
              </h2>
            </div>
            <p>
              Elegí la modalidad que mejor encaja en tu vida: atención 1 a 1 en
              tu gimnasio o entrenamiento online desde donde estés.
            </p>
          </div>
          <div className="services">
            <article className="service red">
              <span className="tag">Presencial</span>
              <b className="number">01</b>
              <h3>Entrenamiento 1 a 1</h3>
              <p>
                Rodrigo te acompaña en el gimnasio que ya utilizás, con atención
                individual y supervisión.
              </p>
              <ul>
                <Check>Supervisión presencial</Check>
                <Check>Acompañamiento para principiantes</Check>
              </ul>
              <div className="meta">
                <p>
                  <small>Zonas principales</small>La Teja · Paso Molino · Prado
                  · Aires Puros
                </p>
                <p>
                  <small>Horario</small>Lunes a viernes · 7:00 a 15:00
                </p>
              </div>
              <p className="note">
                ¿Estás en otra zona de Montevideo? Consultá disponibilidad.
              </p>
            </article>
            <article className="service">
              <span className="tag">Online</span>
              <b className="number">02</b>
              <h3>Entrená donde estés</h3>
              <p>
                Entrená en el gimnasio o desde tu casa con una planificación
                acorde a tu experiencia y al equipamiento disponible.
              </p>
              <ul>
                <Check>Seguimiento semanal</Check>
                <Check>Entrenamiento desde cualquier lugar</Check>
              </ul>
              <a className="textlink" href={wa}>
                Consultar modalidad online →
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell" id="proceso">
        <div className="center">
          <p className="eyebrow">
            <i /> Simple, claro y personalizado
          </p>
          <h2>
            Tu camino, <em>paso a paso.</em>
          </h2>
        </div>
        <div className="steps">
          {[
            ["Contacto", "Escribile a Rodrigo por WhatsApp."],
            [
              "Evaluación",
              "Charla sobre objetivos, experiencia y disponibilidad.",
            ],
            [
              "Plan",
              "Un entrenamiento adaptado a tu nivel, metas y tiempo.",
            ],
            [
              "Entrenamiento y seguimiento",
              "Empezás y el plan se ajusta según tu evolución.",
            ],
          ].map((s, i) => (
            <article key={s[0]}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              <h3>{s[0]}</h3>
              <p>{s[1]}</p>
            </article>
          ))}
        </div>
        <div className="center">
          <a className="btn" href={wa}>
            Dar el primer paso ↗
          </a>
        </div>
      </section>

      <section className="about" id="rodrigo">
        <div className="aboutImg">
          <img
            src="/assets/rodrigo-profile.jpeg"
            alt="Rodrigo Kalina, entrenador personal"
          />
          <div>
            <strong>Rodrigo Kalina</strong>
            <span>Entrenador Personal Certificado</span>
          </div>
        </div>
        <div className="aboutText">
          <p className="eyebrow">
            <i /> Conocé a tu entrenador
          </p>
          <h2>
            Alguien que <em>entiende el proceso.</em>
          </h2>
          <p>
            Soy Rodrigo Kalina, Entrenador Personal certificado y apasionado por
            el entrenamiento y la mejora física.
          </p>
          <p>
            Mi interés nació desde mi propia experiencia. Entendí que entrenar
            no se trata solamente de levantar más peso o cambiar físicamente,
            sino de aprender, ser constante y encontrar una forma que se adapte
            a cada persona.
          </p>
          <p>
            Decidí formarme para transformar esa experiencia en una herramienta
            para ayudar a otros. Hoy acompaño a quienes quieren empezar, ganar
            masa muscular, reducir grasa o sentirse más fuertes y cómodos con su
            cuerpo.
          </p>
          <p>
            No importa si nunca pisaste un gimnasio o si ya venís entrenando: la
            idea es que tengas un plan claro y alguien que te acompañe.
          </p>
          <div className="values">
            <span>✓ Trato cercano</span>
            <span>✓ Seguimiento constante</span>
            <span>✓ Atención personalizada</span>
            <span>✓ Experiencia propia</span>
            <span>✓ Apoyo a principiantes</span>
          </div>
        </div>
      </section>

      <section className="section shell" id="planes">
        <div className="center">
          <p className="eyebrow">
            <i /> Invertí en tu proceso
          </p>
          <h2>
            Elegí cómo querés <em>entrenar.</em>
          </h2>
          <p>
            Compará precio, modalidad y alcance para elegir la opción que mejor
            se adapta a vos.
          </p>
        </div>
        <div className="plans">
          <article className="plan">
            <small>PLAN ONLINE</small>
            <h3>Entrená desde cualquier lugar</h3>
            <div className="price">
              <strong>$2.800</strong>
              <span>UYU / mes</span>
            </div>
            <ul>
              <Check>Rutina personalizada</Check>
              <Check>Seguimiento semanal</Check>
              <Check>Ajustes según evolución</Check>
              <Check>Entrenamiento desde cualquier lugar</Check>
            </ul>
            <a className="btn ghost wide" href={wa}>
              Quiero entrenar online
            </a>
          </article>
          <article className="plan mainplan">
            <label>Precio de lanzamiento</label>
            <small>PLAN PRESENCIAL</small>
            <h3>Atención individual 1 a 1</h3>
            <div className="price from">
              <span>Desde</span>
              <strong>${PRESENCIAL_DESDE}</strong>
              <span>UYU / mes</span>
            </div>
            <p className="planClarification">
              La cantidad de sesiones y frecuencia se coordinan según el
              objetivo y disponibilidad del cliente.
            </p>
            <ul>
              <Check>Entrenamiento presencial personalizado</Check>
              <Check>Atención individual</Check>
              <Check>Seguimiento y ajustes</Check>
              <Check>Desplazamiento en zonas incluido</Check>
            </ul>
            <a className="btn wide" href={wa}>
              Quiero entrenar presencial
            </a>
          </article>
        </div>
        <div className="payment">
          <strong>Evaluación inicial gratuita</strong>
          <span>Pago mediante transferencia bancaria</span>
        </div>
        <p className="policy">
          Las sesiones pueden reprogramarse avisando con al menos 12 horas de
          anticipación. Las cancelaciones con menos de 12 horas o ausencias sin
          aviso se consideran como sesión realizada. Situaciones excepcionales
          podrán coordinarse directamente con Rodrigo.
        </p>
      </section>

      <section className="section formation" id="formacion">
        <div className="shell formGrid">
          <div className="cert">
            <img
              src="/assets/rodrigo-certificado.jpeg"
              alt="Rodrigo Kalina sosteniendo su certificado de Entrenador Personal"
            />
            <span>FORMACIÓN 2026</span>
          </div>
          <div>
            <p className="eyebrow">
              <i /> Formación y preparación
            </p>
            <h2>
              Aprender para ayudarte a <em>entrenar mejor.</em>
            </h2>
            <p>
              Rodrigo continúa capacitándose para acompañar cada proceso con
              mejores herramientas.
            </p>
            <div className="credential">
              <b>✓</b>
              <p>
                <small>CERTIFICACIÓN COMPLETADA</small>
                <strong>Entrenador Personal Certificado</strong>
                <span>
                  Instituto Modo Fitness / Instituto Internacional de
                  Entrenadores UY
                </span>
                <em>2026</em>
              </p>
            </div>
            <div className="credential next">
              <b>→</b>
              <p>
                <small>FORMACIÓN CONTINUA</small>
                <strong>Musculación y Metodologías del Entrenamiento</strong>
                <span>
                  Capacitación continua para sumar nuevas herramientas.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="shell faqGrid">
          <div>
            <p className="eyebrow">
              <i /> Todo lo que necesitás saber
            </p>
            <h2>
              Preguntas <em>frecuentes.</em>
            </h2>
            <p>
              ¿Te quedó alguna duda? Escribile a Rodrigo y conversen sobre tu
              caso.
            </p>
            <a className="textlink" href={wa}>
              Consultar por WhatsApp →
            </a>
          </div>
          <div>
            {faqs.map((f, i) => (
              <details key={f[0]} open={i === 0}>
                <summary>
                  {f[0]}
                  <span>+</span>
                </summary>
                <p>{f[1]}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <div className="bigmark">RK</div>
        <div className="shell">
          <p className="eyebrow">
            <i /> Tu próximo paso
          </p>
          <h2>
            Tu cambio empieza
            <br />
            con una <em>decisión.</em>
          </h2>
          <p>
            No necesitás saber todo para empezar. Necesitás un plan claro,
            constancia y alguien que te acompañe durante el proceso.
          </p>
          <a className="btn big" href={wa}>
            Agendar evaluación gratis ↗
          </a>
          <small>Sin costo · Sin compromiso · Directo por WhatsApp</small>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", name: "RK Training", url: "https://rk-training.pepenachokp.chatgpt.site", image: "https://rk-training.pepenachokp.chatgpt.site/assets/rk-logo.jpeg", telephone: "+59895033455", founder: { "@type": "Person", name: "Rodrigo Kalina" }, areaServed: { "@type": "City", name: "Montevideo" }, address: { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" }, sameAs: ["https://www.instagram.com/rk.training.uy"] }) }} />
      </main>

      <footer>
        <div className="shell footerGrid">
          <div className="footBrand">
            <img src="/assets/rk-logo.jpeg" alt="Logo de RK Training" />
            <p>
              <strong>RK Training</strong>
              <span>Rodrigo Kalina · Personal Trainer</span>
            </p>
          </div>
          <div>
            <small>CONTACTO</small>
            <a href="tel:+59895033455">095 033 455</a>
            <span>Montevideo, Uruguay</span>
          </div>
          <div>
            <small>SEGUINOS</small>
            <span>Instagram</span>
            <a className="instagram" href="https://www.instagram.com/rk.training.uy?igsi=a2xyc2xyNXhnMW5r" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.4" cy="6.6" r="1" className="igDot" /></svg>
              @rk.training.uy
            </a>
          </div>
        </div>
        <div className="shell copyright">
          <span>© 2026 RK Training. Todos los derechos reservados.</span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
      <a className="float" href={wa} aria-label="Contactar por WhatsApp">
        ✆
      </a>
    </>
  );
}
