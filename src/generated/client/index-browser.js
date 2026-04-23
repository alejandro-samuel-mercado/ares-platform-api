
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VendorScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  alias: 'alias',
  telefono: 'telefono',
  password_hash: 'password_hash',
  logo_url: 'logo_url',
  logo_cloudinary_id: 'logo_cloudinary_id',
  whatsapp: 'whatsapp',
  plan_id: 'plan_id',
  fecha_registro: 'fecha_registro',
  fecha_vencimiento: 'fecha_vencimiento',
  status: 'status',
  rating: 'rating',
  biografia: 'biografia',
  role: 'role'
};

exports.Prisma.PlanScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  precio: 'precio',
  dias: 'dias',
  tipo: 'tipo',
  limite_servicios: 'limite_servicios',
  texto_limite: 'texto_limite',
  pedidos_automaticos: 'pedidos_automaticos',
  enlace_publico: 'enlace_publico',
  marketplace_proveedor: 'marketplace_proveedor',
  activo: 'activo'
};

exports.Prisma.EstrenoScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  descripcion: 'descripcion',
  plataforma: 'plataforma',
  fecha_estreno: 'fecha_estreno',
  imagen_url: 'imagen_url',
  activo: 'activo',
  creado_en: 'creado_en'
};

exports.Prisma.ServicioBaseScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre',
  logo_url: 'logo_url',
  descripcion_base: 'descripcion_base',
  precio_sugerido: 'precio_sugerido',
  categoria: 'categoria',
  es_iptv_propio: 'es_iptv_propio',
  estado_actual: 'estado_actual',
  nota_estado: 'nota_estado',
  proveedor_id: 'proveedor_id',
  comision_pct: 'comision_pct',
  estado_aprobacion: 'estado_aprobacion',
  activo: 'activo'
};

exports.Prisma.MiServicioScalarFieldEnum = {
  id: 'id',
  vendor_id: 'vendor_id',
  servicio_id: 'servicio_id',
  precio_venta: 'precio_venta',
  activo: 'activo',
  creado_en: 'creado_en'
};

exports.Prisma.ImagenScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  public_id: 'public_id',
  url_base: 'url_base',
  etiquetas: 'etiquetas',
  categoria: 'categoria',
  activo: 'activo',
  creado_en: 'creado_en',
  servicio_id: 'servicio_id'
};

exports.Prisma.PartidoScalarFieldEnum = {
  id: 'id',
  fecha: 'fecha',
  hora: 'hora',
  equipo_local: 'equipo_local',
  equipo_visita: 'equipo_visita',
  logo_local: 'logo_local',
  logo_visita: 'logo_visita',
  canal: 'canal',
  liga: 'liga',
  requiere_iptv: 'requiere_iptv',
  push_enviado: 'push_enviado',
  activo: 'activo'
};

exports.Prisma.MensajeRapidoScalarFieldEnum = {
  id: 'id',
  titulo: 'titulo',
  template: 'template',
  orden: 'orden',
  activo: 'activo'
};

exports.Prisma.PedidoScalarFieldEnum = {
  id: 'id',
  vendor_id: 'vendor_id',
  servicio_id: 'servicio_id',
  notas: 'notas',
  status: 'status',
  creado_en: 'creado_en'
};

exports.Prisma.PagoScalarFieldEnum = {
  id: 'id',
  vendor_id: 'vendor_id',
  monto: 'monto',
  plan_id: 'plan_id',
  comprobante_url: 'comprobante_url',
  status: 'status',
  confirmado_en: 'confirmado_en',
  notas_admin: 'notas_admin',
  creado_en: 'creado_en'
};

exports.Prisma.AjustesPlataformaScalarFieldEnum = {
  id: 'id',
  qr_cobro_url: 'qr_cobro_url',
  tigo_money_numero: 'tigo_money_numero',
  texto_legal: 'texto_legal',
  nombre_plataforma: 'nombre_plataforma',
  logo_url: 'logo_url',
  noticia_global: 'noticia_global',
  whatsapp_soporte: 'whatsapp_soporte'
};

exports.Prisma.ClickMarketplaceScalarFieldEnum = {
  id: 'id',
  vendor_id: 'vendor_id',
  servicio_id: 'servicio_id',
  proveedor_id: 'proveedor_id',
  creado_en: 'creado_en'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Vendor: 'Vendor',
  Plan: 'Plan',
  Estreno: 'Estreno',
  ServicioBase: 'ServicioBase',
  MiServicio: 'MiServicio',
  Imagen: 'Imagen',
  Partido: 'Partido',
  MensajeRapido: 'MensajeRapido',
  Pedido: 'Pedido',
  Pago: 'Pago',
  AjustesPlataforma: 'AjustesPlataforma',
  ClickMarketplace: 'ClickMarketplace'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
