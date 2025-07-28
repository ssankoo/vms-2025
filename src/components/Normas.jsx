import React from 'react';

const servicios = [
    {
        titulo: 'ISO 9001: Sistema de Gestión de Calidad',
        descripcion: 'Esta norma está destinada para la organización cuyos pilares son la calidad y trabajar para satisfacer las necesidades y expectativas de sus clientes. Implementar la norma ISO 9001 implica un compromiso en la mejora de la calidad de los procesos que realiza la empresa, sin importar su tamaño o actividad. Además de que se trabaja sobre el análisis de los riesgos y la mejora continua, lo que facilita su crecimiento. Esta norma es la más conocida de las Normas ISO, y es requerida por clientes a la hora de seleccionar y evaluar a sus proveedores. También suele ser el punto de partida para luego incorporar otras normas. ',
    },
    {
        titulo: 'ISO 45001: Seguridad y Salud en el Trabajo',
        descripcion: 'Es requerida cuando se desea evidenciar que el personal trabaja bajo condiciones de seguridad controladas. El objetivo principal es mitigar los posibles daños a la salud y seguridad de las personas en su ambiente laboral. Implementarla implica un compromiso con el personal, que debe ser involucrado en los procesos de control, toma de conciencia y cumplimiento de requisitos legales. Su implementación está asociada a la necesidad de demostrar a los clientes que las actividades a desarrollar son seguras y no van a ocasionar problemas que deriven de riegos laborales para ellos o terceros.',
    },
    {
        titulo: 'ISO 14001: Sistema de Gestión Ambiental',
        descripcion: 'Se implementa cuando las empresas quieren demostrar que son responsables y están comprometidas con la protección del medio ambiente. Además de gestionar el delicado equilibrio entre el mantenimiento de la rentabilidad y la reducción del impacto medioambiental, lo que es una preocupación a nivel mundial. ISO 14001 ayuda a gestionar e identificar los riesgos ambientales que pueden producirse internamente en la empresa mientras realiza su actividad. ',
    },
    {
        titulo: 'ISO 17025: Competencia de Laboratorios de ensayo y calibración',
        descripcion: 'Aquellas empresas que brindan servicios asociados a ensayos y/o calibraciones implementan esta norma que pone el foco en la competencia del personal y el método de trabajo por el cual se ensaya y/o calibra diferente tipo de instrumentos. Esta norma se acredita por técnicas supeditadas por el OAA (Organismo Argentino de Acreditación), o por el INTI- SAC cuando el objetivo es formar parte de esta red de empresas que brindan servicios respaldados por dicho organismo. Su implementación consta de dos partes; por un lado, el sistema de gestión de calidad basado en ISO 9001, y por la otra, la parte técnica según la actividad que se quiera acreditar (Masa, Volumen, Peso, etc). ',
    },
    {
        titulo: 'BPF - ANMAT: Buenas prácticas de fabricación',
        descripcion: 'Es una norma que rige en forma obligatoria para los productos médicos fabricados e importados que son controlados por ANMAT. Esta norma es solicitada para poder obtener la autorización de funcionamiento de empresa y está sujeto a las regulaciones del MERCOSUR. El grado de exigencia de estas normas varía de acuerdo con la clase de producto que se trate (clase I II III y IV) y es indispensable poder ubicar a los diferentes productos en estas categorías antes de iniciar el proceso de implementación. Esta norma está asociada a la Norma ISO 9001. ',
    },
    {
        titulo: 'Mantenimiento de sistemas',
        descripcion: 'En algunos casos las organizaciones deciden contar con el apoyo de alguien externo para que colabore con el desarrollo, mantenimiento y mejora de su sistema de gestión ya certificado. Parte de nuestros servicios es brindar un acompañamiento, con el objetivo de asegurar que las actividades a realizar sean efectivas a la hora de demostrar el adecuado funcionamiento de los sistemas de gestión. ',
    },
    {
        titulo: 'Auditorías internas',
        descripcion: 'Las auditorias de todos los sistemas son un requisito mandatorio y deben ser realizadas por personal independiente del proceso a auditar. Muchas veces es positivo contar con alguien externo que nos ayude a evaluar el estado de nuestro sistema, para detectar desviaciones y oportunidades de mejora sobre todo si se está próximo a ser auditado por el ente certificador o un cliente. ',
    },
    {
        titulo: 'Asesoría en comunicación',
        descripcion: 'Lo asesoramos en la gestión de la comunicación con sus públicos, a través de planes estratégicos de comunicación, la gestión de conflictos potenciales y planes de comunicación interna. ',
    },
];

const Normas = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Servicios</h1>
            <div className="grid md:grid-cols-2 gap-4">
                {servicios.map((servicio, idx) => (
                    <div key={idx}>
                        <h2 className="text-base md:text-lg text-black mb-10 leading-relaxed font-bold">{servicio.titulo}</h2>
                        <p className="text-gray-700 text-m leading-relaxed">{servicio.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Normas;
