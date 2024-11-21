
import project2 from "../assets/projects/project-2.JPG";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `!Hola Soy Eddy Juarez estudiante de Administracion de Empresas en la Universidad San Carlos de Guatemala,
hace unos años me surgio la curiosidad por la programación, pero fue hasta el 2023 que decidi entrar de lleno a aprender del tema,
actualmente me encuentro sacando certificaciones para poder cumplir una de mis metas que es entrar en la industria del desarrollo de software 
y asi poder ayudar a las empresas en su desarrollo constante, con codigo limpio y escalable.    
`;

export const ABOUT_TEXT = `Soy estudiante de desarrollador full stack dedicado y versátil con pasión por crear aplicaciones web eficientes y fáciles de usar. 
He estado empapandome de conocimiento con una variedad de tecnologías, incluidas JavaScript, React js, Next.js, Node.js, Php, Laravel, C#, .NET, MySQL y SQL Server.
Mi viaje en el desarrollo web comenzó con una profunda curiosidad por cómo funcionan las cosas y ha evolucionado hasta convertirse en una carrera en la que quiero 
poner todo mi esfuerzo por aprender y adaptarme a nuevos desafíos. Disfruto mantenerme activo, explorar nuevas tecnologías y mantenerme actualizado.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "Facturación",
    company: "Ingenieria Avanzada de Centroamerica S.A",
    description: `Encargado de realizar la facturacion diaria de la cartera de clientes, de productos de telecomunicaciones, realizar reporte de ventas diarias, y mensuales.`,
    technologies: ["SAC", "EXCEL"],
  },
  {
    year: "2017 - 2021",
    role: "Facturación",
    company: "Multiblocks, S.A",
    description: `Encargado de realizar facturacion diaria de productos para la construccion, realizar reporte diario y mensual de ventas.`,
    technologies: ["SAP BUSSINES", "EXCEL"],
  },
  {
    year: "2014 - 2017",
    role: "BackOffice",
    company: "Applus+",
    description: `Soporte a personal en campo, seguimiento por medio de GPS, asignación de ruta.`,
    technologies: ["EXCEL","LOCALIZADOR TIGO" ],
  },
 
];

export const PROJECTS = [

  {
    title: "Sistema de Ventas",
    image: project2,
    description:
      "Este proyecto se realizo con el fin de practicar mis habilidades, utilice .NET para realizar el ApiRestFull, utilizando arquitectura NCapas y Angular para el Frontend, como base de datos utilice SQLServer. Puedes probar la aplicacion con las siguientes credenciales (para empleado: empleado@empleado.com clave: 123456, para supervisor supervisor@supervisor.com clave: 123456, en el caso del administrador con este usuario podemos realizar mas cosas, como por ejemplo agregar un nuevos usuarios)",
    technologies: ["HTML", "CSS", "Angular", ".NET", "SQLServer"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Protafolio personal el cual actualizo constantemetne.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
 
];

export const CONTACT = {
  address: "EL FRUTAL 1, ZONA 5 VILLA NUEVA ",
  phoneNo: "+502 46628205 ",
  email: "eddjuarez1209@gmail.com",
};
