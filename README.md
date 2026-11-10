# Sistema de Gestión de Solicitudes de Soporte Técnico

Sistema automatizado para la captura, procesamiento y almacenamiento de solicitudes de soporte técnico, desarrollado como parte de prácticas profesionales.

## 🛠️ Tecnologías y Herramientas
- **Backend:** Node.js (Express) o Python (Flask)
- **Base de Datos:** PostgreSQL (hospedada en Neon)
- **Despliegue:** Render
- **Automatización y Orquestación:** n8n
- **Interfaz de Captura y Reportes:** Google Forms & Google Sheets (con Dashboard integrado)
- **Notificaciones:** Gmail API

## 🚀 Endpoints de la API
- `GET /solicitudes` - Retorna el listado completo de las solicitudes registradas en la base de datos.
- `POST /solicitudes` - Recibe y almacena un nuevo ticket de soporte enviado desde el flujo de n8n.

## 🔄 Flujo de Trabajo (Workflow)
1. El usuario registra una incidencia mediante **Google Forms**.
2. **Google Sheets** almacena la respuesta inicial.
3. **n8n** detecta el evento, procesa la información y genera un folio único.
4. La API REST procesa la inserción en **PostgreSQL (Neon)**.
5. Se actualiza la hoja de cálculo con el estatus de procesamiento y se envía un correo de confirmación automático vía **Gmail**.