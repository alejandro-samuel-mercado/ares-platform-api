
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Vendor
 * ──────────────────────────────────────────
 * Modelo: Vendor
 * Representa a un vendedor/revendedor registrado en la plataforma.
 * Cada vendor opera en un espacio aislado por su ID (multi-tenant).
 * ──────────────────────────────────────────
 */
export type Vendor = $Result.DefaultSelection<Prisma.$VendorPayload>
/**
 * Model Plan
 * ──────────────────────────────────────────
 * Modelo: Plan
 * Define los planes de membresía disponibles con sus límites y features.
 * ──────────────────────────────────────────
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Estreno
 * ──────────────────────────────────────────
 * Modelo: Estreno
 * Feed de noticias de estrenos de series/pelis.
 * El admin publica, el vendedor lo ve en su home.
 * ──────────────────────────────────────────
 */
export type Estreno = $Result.DefaultSelection<Prisma.$EstrenoPayload>
/**
 * Model ServicioBase
 * ──────────────────────────────────────────
 * Modelo: ServicioBase
 * Catálogo maestro de servicios (Netflix, Disney+, IPTV, etc.)
 * que los vendedores pueden activar en su catálogo personal.
 * ──────────────────────────────────────────
 */
export type ServicioBase = $Result.DefaultSelection<Prisma.$ServicioBasePayload>
/**
 * Model MiServicio
 * ──────────────────────────────────────────
 * Modelo: MiServicio
 * Relación N:N entre Vendor y ServicioBase.
 * El vendedor activa un servicio y le pone su precio de venta.
 * ──────────────────────────────────────────
 */
export type MiServicio = $Result.DefaultSelection<Prisma.$MiServicioPayload>
/**
 * Model Imagen
 * ──────────────────────────────────────────
 * Modelo: Imagen
 * Banco de imágenes promocionales subidas por el admin.
 * La marca de agua se aplica al momento del download, no del upload.
 * ──────────────────────────────────────────
 */
export type Imagen = $Result.DefaultSelection<Prisma.$ImagenPayload>
/**
 * Model Partido
 * ──────────────────────────────────────────
 * Modelo: Partido
 * Guía TV — partidos con horarios y canales.
 * Puede disparar notificación push a vendedores Pro.
 * ──────────────────────────────────────────
 */
export type Partido = $Result.DefaultSelection<Prisma.$PartidoPayload>
/**
 * Model MensajeRapido
 * ──────────────────────────────────────────
 * Modelo: MensajeRapido
 * Mensajes precargados con variables dinámicas para que los
 * vendedores los copien y envíen a sus clientes por WhatsApp.
 * ──────────────────────────────────────────
 */
export type MensajeRapido = $Result.DefaultSelection<Prisma.$MensajeRapidoPayload>
/**
 * Model Pedido
 * ──────────────────────────────────────────
 * Modelo: Pedido
 * Pedidos automáticos (solo Plan Pro).
 * El vendedor solicita credenciales y el admin las asigna.
 * ──────────────────────────────────────────
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model Pago
 * ──────────────────────────────────────────
 * Modelo: Pago
 * Registro de pagos manuales. El admin confirma o rechaza.
 * Al confirmar, se extiende la suscripción del vendor.
 * ──────────────────────────────────────────
 */
export type Pago = $Result.DefaultSelection<Prisma.$PagoPayload>
/**
 * Model AjustesPlataforma
 * ──────────────────────────────────────────
 * Modelo: AjustesPlataforma
 * Configuración global: QR de cobro, texto legal, branding.
 * Solo existe 1 registro (singleton).
 * ──────────────────────────────────────────
 */
export type AjustesPlataforma = $Result.DefaultSelection<Prisma.$AjustesPlataformaPayload>
/**
 * Model ClickMarketplace
 * ──────────────────────────────────────────
 * Modelo: ClickMarketplace (Analítica Comercial)
 * Rastrea intenciones de compra de Vendedores sobre
 * servicios ofrecidos por Proveedores en el Marketplace.
 * ──────────────────────────────────────────
 */
export type ClickMarketplace = $Result.DefaultSelection<Prisma.$ClickMarketplacePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vendors
 * const vendors = await prisma.vendor.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Vendors
   * const vendors = await prisma.vendor.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.vendor`: Exposes CRUD operations for the **Vendor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vendors
    * const vendors = await prisma.vendor.findMany()
    * ```
    */
  get vendor(): Prisma.VendorDelegate<ExtArgs>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.estreno`: Exposes CRUD operations for the **Estreno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estrenos
    * const estrenos = await prisma.estreno.findMany()
    * ```
    */
  get estreno(): Prisma.EstrenoDelegate<ExtArgs>;

  /**
   * `prisma.servicioBase`: Exposes CRUD operations for the **ServicioBase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicioBases
    * const servicioBases = await prisma.servicioBase.findMany()
    * ```
    */
  get servicioBase(): Prisma.ServicioBaseDelegate<ExtArgs>;

  /**
   * `prisma.miServicio`: Exposes CRUD operations for the **MiServicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MiServicios
    * const miServicios = await prisma.miServicio.findMany()
    * ```
    */
  get miServicio(): Prisma.MiServicioDelegate<ExtArgs>;

  /**
   * `prisma.imagen`: Exposes CRUD operations for the **Imagen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imagens
    * const imagens = await prisma.imagen.findMany()
    * ```
    */
  get imagen(): Prisma.ImagenDelegate<ExtArgs>;

  /**
   * `prisma.partido`: Exposes CRUD operations for the **Partido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partidos
    * const partidos = await prisma.partido.findMany()
    * ```
    */
  get partido(): Prisma.PartidoDelegate<ExtArgs>;

  /**
   * `prisma.mensajeRapido`: Exposes CRUD operations for the **MensajeRapido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MensajeRapidos
    * const mensajeRapidos = await prisma.mensajeRapido.findMany()
    * ```
    */
  get mensajeRapido(): Prisma.MensajeRapidoDelegate<ExtArgs>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **Pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.PagoDelegate<ExtArgs>;

  /**
   * `prisma.ajustesPlataforma`: Exposes CRUD operations for the **AjustesPlataforma** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AjustesPlataformas
    * const ajustesPlataformas = await prisma.ajustesPlataforma.findMany()
    * ```
    */
  get ajustesPlataforma(): Prisma.AjustesPlataformaDelegate<ExtArgs>;

  /**
   * `prisma.clickMarketplace`: Exposes CRUD operations for the **ClickMarketplace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClickMarketplaces
    * const clickMarketplaces = await prisma.clickMarketplace.findMany()
    * ```
    */
  get clickMarketplace(): Prisma.ClickMarketplaceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "vendor" | "plan" | "estreno" | "servicioBase" | "miServicio" | "imagen" | "partido" | "mensajeRapido" | "pedido" | "pago" | "ajustesPlataforma" | "clickMarketplace"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Vendor: {
        payload: Prisma.$VendorPayload<ExtArgs>
        fields: Prisma.VendorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VendorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VendorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findFirst: {
            args: Prisma.VendorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VendorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          findMany: {
            args: Prisma.VendorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          create: {
            args: Prisma.VendorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          createMany: {
            args: Prisma.VendorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VendorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>[]
          }
          delete: {
            args: Prisma.VendorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          update: {
            args: Prisma.VendorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          deleteMany: {
            args: Prisma.VendorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VendorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VendorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VendorPayload>
          }
          aggregate: {
            args: Prisma.VendorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVendor>
          }
          groupBy: {
            args: Prisma.VendorGroupByArgs<ExtArgs>
            result: $Utils.Optional<VendorGroupByOutputType>[]
          }
          count: {
            args: Prisma.VendorCountArgs<ExtArgs>
            result: $Utils.Optional<VendorCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Estreno: {
        payload: Prisma.$EstrenoPayload<ExtArgs>
        fields: Prisma.EstrenoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstrenoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstrenoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload>
          }
          findFirst: {
            args: Prisma.EstrenoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstrenoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload>
          }
          findMany: {
            args: Prisma.EstrenoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload>[]
          }
          create: {
            args: Prisma.EstrenoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload>
          }
          createMany: {
            args: Prisma.EstrenoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstrenoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload>[]
          }
          delete: {
            args: Prisma.EstrenoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload>
          }
          update: {
            args: Prisma.EstrenoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload>
          }
          deleteMany: {
            args: Prisma.EstrenoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstrenoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EstrenoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstrenoPayload>
          }
          aggregate: {
            args: Prisma.EstrenoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstreno>
          }
          groupBy: {
            args: Prisma.EstrenoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstrenoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstrenoCountArgs<ExtArgs>
            result: $Utils.Optional<EstrenoCountAggregateOutputType> | number
          }
        }
      }
      ServicioBase: {
        payload: Prisma.$ServicioBasePayload<ExtArgs>
        fields: Prisma.ServicioBaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioBaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioBaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload>
          }
          findFirst: {
            args: Prisma.ServicioBaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioBaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload>
          }
          findMany: {
            args: Prisma.ServicioBaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload>[]
          }
          create: {
            args: Prisma.ServicioBaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload>
          }
          createMany: {
            args: Prisma.ServicioBaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioBaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload>[]
          }
          delete: {
            args: Prisma.ServicioBaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload>
          }
          update: {
            args: Prisma.ServicioBaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload>
          }
          deleteMany: {
            args: Prisma.ServicioBaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioBaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServicioBaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioBasePayload>
          }
          aggregate: {
            args: Prisma.ServicioBaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicioBase>
          }
          groupBy: {
            args: Prisma.ServicioBaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioBaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioBaseCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioBaseCountAggregateOutputType> | number
          }
        }
      }
      MiServicio: {
        payload: Prisma.$MiServicioPayload<ExtArgs>
        fields: Prisma.MiServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MiServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MiServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload>
          }
          findFirst: {
            args: Prisma.MiServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MiServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload>
          }
          findMany: {
            args: Prisma.MiServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload>[]
          }
          create: {
            args: Prisma.MiServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload>
          }
          createMany: {
            args: Prisma.MiServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MiServicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload>[]
          }
          delete: {
            args: Prisma.MiServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload>
          }
          update: {
            args: Prisma.MiServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload>
          }
          deleteMany: {
            args: Prisma.MiServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MiServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MiServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MiServicioPayload>
          }
          aggregate: {
            args: Prisma.MiServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMiServicio>
          }
          groupBy: {
            args: Prisma.MiServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<MiServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.MiServicioCountArgs<ExtArgs>
            result: $Utils.Optional<MiServicioCountAggregateOutputType> | number
          }
        }
      }
      Imagen: {
        payload: Prisma.$ImagenPayload<ExtArgs>
        fields: Prisma.ImagenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          findFirst: {
            args: Prisma.ImagenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          findMany: {
            args: Prisma.ImagenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>[]
          }
          create: {
            args: Prisma.ImagenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          createMany: {
            args: Prisma.ImagenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>[]
          }
          delete: {
            args: Prisma.ImagenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          update: {
            args: Prisma.ImagenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          deleteMany: {
            args: Prisma.ImagenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ImagenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagenPayload>
          }
          aggregate: {
            args: Prisma.ImagenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImagen>
          }
          groupBy: {
            args: Prisma.ImagenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagenCountArgs<ExtArgs>
            result: $Utils.Optional<ImagenCountAggregateOutputType> | number
          }
        }
      }
      Partido: {
        payload: Prisma.$PartidoPayload<ExtArgs>
        fields: Prisma.PartidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          findFirst: {
            args: Prisma.PartidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          findMany: {
            args: Prisma.PartidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>[]
          }
          create: {
            args: Prisma.PartidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          createMany: {
            args: Prisma.PartidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>[]
          }
          delete: {
            args: Prisma.PartidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          update: {
            args: Prisma.PartidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          deleteMany: {
            args: Prisma.PartidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidoPayload>
          }
          aggregate: {
            args: Prisma.PartidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartido>
          }
          groupBy: {
            args: Prisma.PartidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartidoCountArgs<ExtArgs>
            result: $Utils.Optional<PartidoCountAggregateOutputType> | number
          }
        }
      }
      MensajeRapido: {
        payload: Prisma.$MensajeRapidoPayload<ExtArgs>
        fields: Prisma.MensajeRapidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MensajeRapidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MensajeRapidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload>
          }
          findFirst: {
            args: Prisma.MensajeRapidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MensajeRapidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload>
          }
          findMany: {
            args: Prisma.MensajeRapidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload>[]
          }
          create: {
            args: Prisma.MensajeRapidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload>
          }
          createMany: {
            args: Prisma.MensajeRapidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MensajeRapidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload>[]
          }
          delete: {
            args: Prisma.MensajeRapidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload>
          }
          update: {
            args: Prisma.MensajeRapidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload>
          }
          deleteMany: {
            args: Prisma.MensajeRapidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MensajeRapidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MensajeRapidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MensajeRapidoPayload>
          }
          aggregate: {
            args: Prisma.MensajeRapidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMensajeRapido>
          }
          groupBy: {
            args: Prisma.MensajeRapidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MensajeRapidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MensajeRapidoCountArgs<ExtArgs>
            result: $Utils.Optional<MensajeRapidoCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      Pago: {
        payload: Prisma.$PagoPayload<ExtArgs>
        fields: Prisma.PagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findFirst: {
            args: Prisma.PagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findMany: {
            args: Prisma.PagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          create: {
            args: Prisma.PagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          createMany: {
            args: Prisma.PagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          delete: {
            args: Prisma.PagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          update: {
            args: Prisma.PagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          deleteMany: {
            args: Prisma.PagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.PagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
          }
        }
      }
      AjustesPlataforma: {
        payload: Prisma.$AjustesPlataformaPayload<ExtArgs>
        fields: Prisma.AjustesPlataformaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AjustesPlataformaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AjustesPlataformaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload>
          }
          findFirst: {
            args: Prisma.AjustesPlataformaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AjustesPlataformaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload>
          }
          findMany: {
            args: Prisma.AjustesPlataformaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload>[]
          }
          create: {
            args: Prisma.AjustesPlataformaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload>
          }
          createMany: {
            args: Prisma.AjustesPlataformaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AjustesPlataformaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload>[]
          }
          delete: {
            args: Prisma.AjustesPlataformaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload>
          }
          update: {
            args: Prisma.AjustesPlataformaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload>
          }
          deleteMany: {
            args: Prisma.AjustesPlataformaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AjustesPlataformaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AjustesPlataformaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AjustesPlataformaPayload>
          }
          aggregate: {
            args: Prisma.AjustesPlataformaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAjustesPlataforma>
          }
          groupBy: {
            args: Prisma.AjustesPlataformaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AjustesPlataformaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AjustesPlataformaCountArgs<ExtArgs>
            result: $Utils.Optional<AjustesPlataformaCountAggregateOutputType> | number
          }
        }
      }
      ClickMarketplace: {
        payload: Prisma.$ClickMarketplacePayload<ExtArgs>
        fields: Prisma.ClickMarketplaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClickMarketplaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClickMarketplaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload>
          }
          findFirst: {
            args: Prisma.ClickMarketplaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClickMarketplaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload>
          }
          findMany: {
            args: Prisma.ClickMarketplaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload>[]
          }
          create: {
            args: Prisma.ClickMarketplaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload>
          }
          createMany: {
            args: Prisma.ClickMarketplaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClickMarketplaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload>[]
          }
          delete: {
            args: Prisma.ClickMarketplaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload>
          }
          update: {
            args: Prisma.ClickMarketplaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload>
          }
          deleteMany: {
            args: Prisma.ClickMarketplaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClickMarketplaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClickMarketplaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClickMarketplacePayload>
          }
          aggregate: {
            args: Prisma.ClickMarketplaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClickMarketplace>
          }
          groupBy: {
            args: Prisma.ClickMarketplaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClickMarketplaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClickMarketplaceCountArgs<ExtArgs>
            result: $Utils.Optional<ClickMarketplaceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VendorCountOutputType
   */

  export type VendorCountOutputType = {
    mis_servicios: number
    pedidos: number
    pagos: number
    servicios_aportados: number
    clicks_marketplace: number
  }

  export type VendorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mis_servicios?: boolean | VendorCountOutputTypeCountMis_serviciosArgs
    pedidos?: boolean | VendorCountOutputTypeCountPedidosArgs
    pagos?: boolean | VendorCountOutputTypeCountPagosArgs
    servicios_aportados?: boolean | VendorCountOutputTypeCountServicios_aportadosArgs
    clicks_marketplace?: boolean | VendorCountOutputTypeCountClicks_marketplaceArgs
  }

  // Custom InputTypes
  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VendorCountOutputType
     */
    select?: VendorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountMis_serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiServicioWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountServicios_aportadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioBaseWhereInput
  }

  /**
   * VendorCountOutputType without action
   */
  export type VendorCountOutputTypeCountClicks_marketplaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickMarketplaceWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    vendors: number
    pagos: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendors?: boolean | PlanCountOutputTypeCountVendorsArgs
    pagos?: boolean | PlanCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountVendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }


  /**
   * Count Type ServicioBaseCountOutputType
   */

  export type ServicioBaseCountOutputType = {
    mis_servicios: number
    clicks: number
    imagenes: number
  }

  export type ServicioBaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mis_servicios?: boolean | ServicioBaseCountOutputTypeCountMis_serviciosArgs
    clicks?: boolean | ServicioBaseCountOutputTypeCountClicksArgs
    imagenes?: boolean | ServicioBaseCountOutputTypeCountImagenesArgs
  }

  // Custom InputTypes
  /**
   * ServicioBaseCountOutputType without action
   */
  export type ServicioBaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBaseCountOutputType
     */
    select?: ServicioBaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioBaseCountOutputType without action
   */
  export type ServicioBaseCountOutputTypeCountMis_serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiServicioWhereInput
  }

  /**
   * ServicioBaseCountOutputType without action
   */
  export type ServicioBaseCountOutputTypeCountClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickMarketplaceWhereInput
  }

  /**
   * ServicioBaseCountOutputType without action
   */
  export type ServicioBaseCountOutputTypeCountImagenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagenWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Vendor
   */

  export type AggregateVendor = {
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  export type VendorAvgAggregateOutputType = {
    rating: number | null
  }

  export type VendorSumAggregateOutputType = {
    rating: number | null
  }

  export type VendorMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    alias: string | null
    telefono: string | null
    password_hash: string | null
    logo_url: string | null
    logo_cloudinary_id: string | null
    whatsapp: string | null
    plan_id: string | null
    fecha_registro: Date | null
    fecha_vencimiento: Date | null
    status: string | null
    rating: number | null
    biografia: string | null
    role: string | null
  }

  export type VendorMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    alias: string | null
    telefono: string | null
    password_hash: string | null
    logo_url: string | null
    logo_cloudinary_id: string | null
    whatsapp: string | null
    plan_id: string | null
    fecha_registro: Date | null
    fecha_vencimiento: Date | null
    status: string | null
    rating: number | null
    biografia: string | null
    role: string | null
  }

  export type VendorCountAggregateOutputType = {
    id: number
    nombre: number
    alias: number
    telefono: number
    password_hash: number
    logo_url: number
    logo_cloudinary_id: number
    whatsapp: number
    plan_id: number
    fecha_registro: number
    fecha_vencimiento: number
    status: number
    rating: number
    biografia: number
    role: number
    _all: number
  }


  export type VendorAvgAggregateInputType = {
    rating?: true
  }

  export type VendorSumAggregateInputType = {
    rating?: true
  }

  export type VendorMinAggregateInputType = {
    id?: true
    nombre?: true
    alias?: true
    telefono?: true
    password_hash?: true
    logo_url?: true
    logo_cloudinary_id?: true
    whatsapp?: true
    plan_id?: true
    fecha_registro?: true
    fecha_vencimiento?: true
    status?: true
    rating?: true
    biografia?: true
    role?: true
  }

  export type VendorMaxAggregateInputType = {
    id?: true
    nombre?: true
    alias?: true
    telefono?: true
    password_hash?: true
    logo_url?: true
    logo_cloudinary_id?: true
    whatsapp?: true
    plan_id?: true
    fecha_registro?: true
    fecha_vencimiento?: true
    status?: true
    rating?: true
    biografia?: true
    role?: true
  }

  export type VendorCountAggregateInputType = {
    id?: true
    nombre?: true
    alias?: true
    telefono?: true
    password_hash?: true
    logo_url?: true
    logo_cloudinary_id?: true
    whatsapp?: true
    plan_id?: true
    fecha_registro?: true
    fecha_vencimiento?: true
    status?: true
    rating?: true
    biografia?: true
    role?: true
    _all?: true
  }

  export type VendorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendor to aggregate.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vendors
    **/
    _count?: true | VendorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VendorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VendorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VendorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VendorMaxAggregateInputType
  }

  export type GetVendorAggregateType<T extends VendorAggregateArgs> = {
        [P in keyof T & keyof AggregateVendor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVendor[P]>
      : GetScalarType<T[P], AggregateVendor[P]>
  }




  export type VendorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithAggregationInput | VendorOrderByWithAggregationInput[]
    by: VendorScalarFieldEnum[] | VendorScalarFieldEnum
    having?: VendorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VendorCountAggregateInputType | true
    _avg?: VendorAvgAggregateInputType
    _sum?: VendorSumAggregateInputType
    _min?: VendorMinAggregateInputType
    _max?: VendorMaxAggregateInputType
  }

  export type VendorGroupByOutputType = {
    id: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url: string | null
    logo_cloudinary_id: string | null
    whatsapp: string | null
    plan_id: string
    fecha_registro: Date
    fecha_vencimiento: Date
    status: string
    rating: number
    biografia: string | null
    role: string
    _count: VendorCountAggregateOutputType | null
    _avg: VendorAvgAggregateOutputType | null
    _sum: VendorSumAggregateOutputType | null
    _min: VendorMinAggregateOutputType | null
    _max: VendorMaxAggregateOutputType | null
  }

  type GetVendorGroupByPayload<T extends VendorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VendorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VendorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VendorGroupByOutputType[P]>
            : GetScalarType<T[P], VendorGroupByOutputType[P]>
        }
      >
    >


  export type VendorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    alias?: boolean
    telefono?: boolean
    password_hash?: boolean
    logo_url?: boolean
    logo_cloudinary_id?: boolean
    whatsapp?: boolean
    plan_id?: boolean
    fecha_registro?: boolean
    fecha_vencimiento?: boolean
    status?: boolean
    rating?: boolean
    biografia?: boolean
    role?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    mis_servicios?: boolean | Vendor$mis_serviciosArgs<ExtArgs>
    pedidos?: boolean | Vendor$pedidosArgs<ExtArgs>
    pagos?: boolean | Vendor$pagosArgs<ExtArgs>
    servicios_aportados?: boolean | Vendor$servicios_aportadosArgs<ExtArgs>
    clicks_marketplace?: boolean | Vendor$clicks_marketplaceArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    alias?: boolean
    telefono?: boolean
    password_hash?: boolean
    logo_url?: boolean
    logo_cloudinary_id?: boolean
    whatsapp?: boolean
    plan_id?: boolean
    fecha_registro?: boolean
    fecha_vencimiento?: boolean
    status?: boolean
    rating?: boolean
    biografia?: boolean
    role?: boolean
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vendor"]>

  export type VendorSelectScalar = {
    id?: boolean
    nombre?: boolean
    alias?: boolean
    telefono?: boolean
    password_hash?: boolean
    logo_url?: boolean
    logo_cloudinary_id?: boolean
    whatsapp?: boolean
    plan_id?: boolean
    fecha_registro?: boolean
    fecha_vencimiento?: boolean
    status?: boolean
    rating?: boolean
    biografia?: boolean
    role?: boolean
  }

  export type VendorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    mis_servicios?: boolean | Vendor$mis_serviciosArgs<ExtArgs>
    pedidos?: boolean | Vendor$pedidosArgs<ExtArgs>
    pagos?: boolean | Vendor$pagosArgs<ExtArgs>
    servicios_aportados?: boolean | Vendor$servicios_aportadosArgs<ExtArgs>
    clicks_marketplace?: boolean | Vendor$clicks_marketplaceArgs<ExtArgs>
    _count?: boolean | VendorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VendorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $VendorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vendor"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs>
      mis_servicios: Prisma.$MiServicioPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
      pagos: Prisma.$PagoPayload<ExtArgs>[]
      servicios_aportados: Prisma.$ServicioBasePayload<ExtArgs>[]
      clicks_marketplace: Prisma.$ClickMarketplacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      alias: string
      telefono: string
      password_hash: string
      logo_url: string | null
      logo_cloudinary_id: string | null
      whatsapp: string | null
      plan_id: string
      fecha_registro: Date
      fecha_vencimiento: Date
      status: string
      rating: number
      biografia: string | null
      role: string
    }, ExtArgs["result"]["vendor"]>
    composites: {}
  }

  type VendorGetPayload<S extends boolean | null | undefined | VendorDefaultArgs> = $Result.GetResult<Prisma.$VendorPayload, S>

  type VendorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VendorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VendorCountAggregateInputType | true
    }

  export interface VendorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vendor'], meta: { name: 'Vendor' } }
    /**
     * Find zero or one Vendor that matches the filter.
     * @param {VendorFindUniqueArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VendorFindUniqueArgs>(args: SelectSubset<T, VendorFindUniqueArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vendor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VendorFindUniqueOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VendorFindUniqueOrThrowArgs>(args: SelectSubset<T, VendorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vendor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VendorFindFirstArgs>(args?: SelectSubset<T, VendorFindFirstArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vendor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindFirstOrThrowArgs} args - Arguments to find a Vendor
     * @example
     * // Get one Vendor
     * const vendor = await prisma.vendor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VendorFindFirstOrThrowArgs>(args?: SelectSubset<T, VendorFindFirstOrThrowArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vendors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vendors
     * const vendors = await prisma.vendor.findMany()
     * 
     * // Get first 10 Vendors
     * const vendors = await prisma.vendor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vendorWithIdOnly = await prisma.vendor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VendorFindManyArgs>(args?: SelectSubset<T, VendorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vendor.
     * @param {VendorCreateArgs} args - Arguments to create a Vendor.
     * @example
     * // Create one Vendor
     * const Vendor = await prisma.vendor.create({
     *   data: {
     *     // ... data to create a Vendor
     *   }
     * })
     * 
     */
    create<T extends VendorCreateArgs>(args: SelectSubset<T, VendorCreateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vendors.
     * @param {VendorCreateManyArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VendorCreateManyArgs>(args?: SelectSubset<T, VendorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vendors and returns the data saved in the database.
     * @param {VendorCreateManyAndReturnArgs} args - Arguments to create many Vendors.
     * @example
     * // Create many Vendors
     * const vendor = await prisma.vendor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vendors and only return the `id`
     * const vendorWithIdOnly = await prisma.vendor.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VendorCreateManyAndReturnArgs>(args?: SelectSubset<T, VendorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vendor.
     * @param {VendorDeleteArgs} args - Arguments to delete one Vendor.
     * @example
     * // Delete one Vendor
     * const Vendor = await prisma.vendor.delete({
     *   where: {
     *     // ... filter to delete one Vendor
     *   }
     * })
     * 
     */
    delete<T extends VendorDeleteArgs>(args: SelectSubset<T, VendorDeleteArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vendor.
     * @param {VendorUpdateArgs} args - Arguments to update one Vendor.
     * @example
     * // Update one Vendor
     * const vendor = await prisma.vendor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VendorUpdateArgs>(args: SelectSubset<T, VendorUpdateArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vendors.
     * @param {VendorDeleteManyArgs} args - Arguments to filter Vendors to delete.
     * @example
     * // Delete a few Vendors
     * const { count } = await prisma.vendor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VendorDeleteManyArgs>(args?: SelectSubset<T, VendorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vendors
     * const vendor = await prisma.vendor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VendorUpdateManyArgs>(args: SelectSubset<T, VendorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vendor.
     * @param {VendorUpsertArgs} args - Arguments to update or create a Vendor.
     * @example
     * // Update or create a Vendor
     * const vendor = await prisma.vendor.upsert({
     *   create: {
     *     // ... data to create a Vendor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vendor we want to update
     *   }
     * })
     */
    upsert<T extends VendorUpsertArgs>(args: SelectSubset<T, VendorUpsertArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vendors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorCountArgs} args - Arguments to filter Vendors to count.
     * @example
     * // Count the number of Vendors
     * const count = await prisma.vendor.count({
     *   where: {
     *     // ... the filter for the Vendors we want to count
     *   }
     * })
    **/
    count<T extends VendorCountArgs>(
      args?: Subset<T, VendorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VendorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VendorAggregateArgs>(args: Subset<T, VendorAggregateArgs>): Prisma.PrismaPromise<GetVendorAggregateType<T>>

    /**
     * Group by Vendor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VendorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VendorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VendorGroupByArgs['orderBy'] }
        : { orderBy?: VendorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VendorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVendorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vendor model
   */
  readonly fields: VendorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vendor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VendorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    mis_servicios<T extends Vendor$mis_serviciosArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$mis_serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "findMany"> | Null>
    pedidos<T extends Vendor$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany"> | Null>
    pagos<T extends Vendor$pagosArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany"> | Null>
    servicios_aportados<T extends Vendor$servicios_aportadosArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$servicios_aportadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "findMany"> | Null>
    clicks_marketplace<T extends Vendor$clicks_marketplaceArgs<ExtArgs> = {}>(args?: Subset<T, Vendor$clicks_marketplaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vendor model
   */ 
  interface VendorFieldRefs {
    readonly id: FieldRef<"Vendor", 'String'>
    readonly nombre: FieldRef<"Vendor", 'String'>
    readonly alias: FieldRef<"Vendor", 'String'>
    readonly telefono: FieldRef<"Vendor", 'String'>
    readonly password_hash: FieldRef<"Vendor", 'String'>
    readonly logo_url: FieldRef<"Vendor", 'String'>
    readonly logo_cloudinary_id: FieldRef<"Vendor", 'String'>
    readonly whatsapp: FieldRef<"Vendor", 'String'>
    readonly plan_id: FieldRef<"Vendor", 'String'>
    readonly fecha_registro: FieldRef<"Vendor", 'DateTime'>
    readonly fecha_vencimiento: FieldRef<"Vendor", 'DateTime'>
    readonly status: FieldRef<"Vendor", 'String'>
    readonly rating: FieldRef<"Vendor", 'Float'>
    readonly biografia: FieldRef<"Vendor", 'String'>
    readonly role: FieldRef<"Vendor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Vendor findUnique
   */
  export type VendorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findUniqueOrThrow
   */
  export type VendorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor findFirst
   */
  export type VendorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findFirstOrThrow
   */
  export type VendorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendor to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vendors.
     */
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor findMany
   */
  export type VendorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter, which Vendors to fetch.
     */
    where?: VendorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vendors to fetch.
     */
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vendors.
     */
    cursor?: VendorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vendors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vendors.
     */
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Vendor create
   */
  export type VendorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to create a Vendor.
     */
    data: XOR<VendorCreateInput, VendorUncheckedCreateInput>
  }

  /**
   * Vendor createMany
   */
  export type VendorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vendor createManyAndReturn
   */
  export type VendorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vendors.
     */
    data: VendorCreateManyInput | VendorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vendor update
   */
  export type VendorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The data needed to update a Vendor.
     */
    data: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
    /**
     * Choose, which Vendor to update.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor updateMany
   */
  export type VendorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vendors.
     */
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyInput>
    /**
     * Filter which Vendors to update
     */
    where?: VendorWhereInput
  }

  /**
   * Vendor upsert
   */
  export type VendorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * The filter to search for the Vendor to update in case it exists.
     */
    where: VendorWhereUniqueInput
    /**
     * In case the Vendor found by the `where` argument doesn't exist, create a new Vendor with this data.
     */
    create: XOR<VendorCreateInput, VendorUncheckedCreateInput>
    /**
     * In case the Vendor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VendorUpdateInput, VendorUncheckedUpdateInput>
  }

  /**
   * Vendor delete
   */
  export type VendorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    /**
     * Filter which Vendor to delete.
     */
    where: VendorWhereUniqueInput
  }

  /**
   * Vendor deleteMany
   */
  export type VendorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vendors to delete
     */
    where?: VendorWhereInput
  }

  /**
   * Vendor.mis_servicios
   */
  export type Vendor$mis_serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    where?: MiServicioWhereInput
    orderBy?: MiServicioOrderByWithRelationInput | MiServicioOrderByWithRelationInput[]
    cursor?: MiServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiServicioScalarFieldEnum | MiServicioScalarFieldEnum[]
  }

  /**
   * Vendor.pedidos
   */
  export type Vendor$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Vendor.pagos
   */
  export type Vendor$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Vendor.servicios_aportados
   */
  export type Vendor$servicios_aportadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    where?: ServicioBaseWhereInput
    orderBy?: ServicioBaseOrderByWithRelationInput | ServicioBaseOrderByWithRelationInput[]
    cursor?: ServicioBaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioBaseScalarFieldEnum | ServicioBaseScalarFieldEnum[]
  }

  /**
   * Vendor.clicks_marketplace
   */
  export type Vendor$clicks_marketplaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    where?: ClickMarketplaceWhereInput
    orderBy?: ClickMarketplaceOrderByWithRelationInput | ClickMarketplaceOrderByWithRelationInput[]
    cursor?: ClickMarketplaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClickMarketplaceScalarFieldEnum | ClickMarketplaceScalarFieldEnum[]
  }

  /**
   * Vendor without action
   */
  export type VendorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    precio: number | null
    dias: number | null
    limite_servicios: number | null
  }

  export type PlanSumAggregateOutputType = {
    precio: number | null
    dias: number | null
    limite_servicios: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    precio: number | null
    dias: number | null
    tipo: string | null
    limite_servicios: number | null
    texto_limite: string | null
    pedidos_automaticos: boolean | null
    enlace_publico: boolean | null
    marketplace_proveedor: boolean | null
    activo: boolean | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    precio: number | null
    dias: number | null
    tipo: string | null
    limite_servicios: number | null
    texto_limite: string | null
    pedidos_automaticos: boolean | null
    enlace_publico: boolean | null
    marketplace_proveedor: boolean | null
    activo: boolean | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    dias: number
    tipo: number
    limite_servicios: number
    texto_limite: number
    pedidos_automaticos: number
    enlace_publico: number
    marketplace_proveedor: number
    activo: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    precio?: true
    dias?: true
    limite_servicios?: true
  }

  export type PlanSumAggregateInputType = {
    precio?: true
    dias?: true
    limite_servicios?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    dias?: true
    tipo?: true
    limite_servicios?: true
    texto_limite?: true
    pedidos_automaticos?: true
    enlace_publico?: true
    marketplace_proveedor?: true
    activo?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    dias?: true
    tipo?: true
    limite_servicios?: true
    texto_limite?: true
    pedidos_automaticos?: true
    enlace_publico?: true
    marketplace_proveedor?: true
    activo?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    dias?: true
    tipo?: true
    limite_servicios?: true
    texto_limite?: true
    pedidos_automaticos?: true
    enlace_publico?: true
    marketplace_proveedor?: true
    activo?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    nombre: string
    precio: number
    dias: number
    tipo: string
    limite_servicios: number | null
    texto_limite: string | null
    pedidos_automaticos: boolean
    enlace_publico: boolean
    marketplace_proveedor: boolean
    activo: boolean
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    dias?: boolean
    tipo?: boolean
    limite_servicios?: boolean
    texto_limite?: boolean
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
    vendors?: boolean | Plan$vendorsArgs<ExtArgs>
    pagos?: boolean | Plan$pagosArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    dias?: boolean
    tipo?: boolean
    limite_servicios?: boolean
    texto_limite?: boolean
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    dias?: boolean
    tipo?: boolean
    limite_servicios?: boolean
    texto_limite?: boolean
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendors?: boolean | Plan$vendorsArgs<ExtArgs>
    pagos?: boolean | Plan$pagosArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      vendors: Prisma.$VendorPayload<ExtArgs>[]
      pagos: Prisma.$PagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      precio: number
      dias: number
      tipo: string
      limite_servicios: number | null
      texto_limite: string | null
      pedidos_automaticos: boolean
      enlace_publico: boolean
      marketplace_proveedor: boolean
      activo: boolean
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendors<T extends Plan$vendorsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$vendorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findMany"> | Null>
    pagos<T extends Plan$pagosArgs<ExtArgs> = {}>(args?: Subset<T, Plan$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly nombre: FieldRef<"Plan", 'String'>
    readonly precio: FieldRef<"Plan", 'Float'>
    readonly dias: FieldRef<"Plan", 'Int'>
    readonly tipo: FieldRef<"Plan", 'String'>
    readonly limite_servicios: FieldRef<"Plan", 'Int'>
    readonly texto_limite: FieldRef<"Plan", 'String'>
    readonly pedidos_automaticos: FieldRef<"Plan", 'Boolean'>
    readonly enlace_publico: FieldRef<"Plan", 'Boolean'>
    readonly marketplace_proveedor: FieldRef<"Plan", 'Boolean'>
    readonly activo: FieldRef<"Plan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }

  /**
   * Plan.vendors
   */
  export type Plan$vendorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
    orderBy?: VendorOrderByWithRelationInput | VendorOrderByWithRelationInput[]
    cursor?: VendorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VendorScalarFieldEnum | VendorScalarFieldEnum[]
  }

  /**
   * Plan.pagos
   */
  export type Plan$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Estreno
   */

  export type AggregateEstreno = {
    _count: EstrenoCountAggregateOutputType | null
    _min: EstrenoMinAggregateOutputType | null
    _max: EstrenoMaxAggregateOutputType | null
  }

  export type EstrenoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    plataforma: string | null
    fecha_estreno: Date | null
    imagen_url: string | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type EstrenoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    descripcion: string | null
    plataforma: string | null
    fecha_estreno: Date | null
    imagen_url: string | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type EstrenoCountAggregateOutputType = {
    id: number
    titulo: number
    descripcion: number
    plataforma: number
    fecha_estreno: number
    imagen_url: number
    activo: number
    creado_en: number
    _all: number
  }


  export type EstrenoMinAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    plataforma?: true
    fecha_estreno?: true
    imagen_url?: true
    activo?: true
    creado_en?: true
  }

  export type EstrenoMaxAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    plataforma?: true
    fecha_estreno?: true
    imagen_url?: true
    activo?: true
    creado_en?: true
  }

  export type EstrenoCountAggregateInputType = {
    id?: true
    titulo?: true
    descripcion?: true
    plataforma?: true
    fecha_estreno?: true
    imagen_url?: true
    activo?: true
    creado_en?: true
    _all?: true
  }

  export type EstrenoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estreno to aggregate.
     */
    where?: EstrenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estrenos to fetch.
     */
    orderBy?: EstrenoOrderByWithRelationInput | EstrenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstrenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estrenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estrenos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estrenos
    **/
    _count?: true | EstrenoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstrenoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstrenoMaxAggregateInputType
  }

  export type GetEstrenoAggregateType<T extends EstrenoAggregateArgs> = {
        [P in keyof T & keyof AggregateEstreno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstreno[P]>
      : GetScalarType<T[P], AggregateEstreno[P]>
  }




  export type EstrenoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstrenoWhereInput
    orderBy?: EstrenoOrderByWithAggregationInput | EstrenoOrderByWithAggregationInput[]
    by: EstrenoScalarFieldEnum[] | EstrenoScalarFieldEnum
    having?: EstrenoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstrenoCountAggregateInputType | true
    _min?: EstrenoMinAggregateInputType
    _max?: EstrenoMaxAggregateInputType
  }

  export type EstrenoGroupByOutputType = {
    id: string
    titulo: string
    descripcion: string | null
    plataforma: string
    fecha_estreno: Date | null
    imagen_url: string | null
    activo: boolean
    creado_en: Date
    _count: EstrenoCountAggregateOutputType | null
    _min: EstrenoMinAggregateOutputType | null
    _max: EstrenoMaxAggregateOutputType | null
  }

  type GetEstrenoGroupByPayload<T extends EstrenoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstrenoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstrenoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstrenoGroupByOutputType[P]>
            : GetScalarType<T[P], EstrenoGroupByOutputType[P]>
        }
      >
    >


  export type EstrenoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    plataforma?: boolean
    fecha_estreno?: boolean
    imagen_url?: boolean
    activo?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["estreno"]>

  export type EstrenoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    plataforma?: boolean
    fecha_estreno?: boolean
    imagen_url?: boolean
    activo?: boolean
    creado_en?: boolean
  }, ExtArgs["result"]["estreno"]>

  export type EstrenoSelectScalar = {
    id?: boolean
    titulo?: boolean
    descripcion?: boolean
    plataforma?: boolean
    fecha_estreno?: boolean
    imagen_url?: boolean
    activo?: boolean
    creado_en?: boolean
  }


  export type $EstrenoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estreno"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      descripcion: string | null
      plataforma: string
      fecha_estreno: Date | null
      imagen_url: string | null
      activo: boolean
      creado_en: Date
    }, ExtArgs["result"]["estreno"]>
    composites: {}
  }

  type EstrenoGetPayload<S extends boolean | null | undefined | EstrenoDefaultArgs> = $Result.GetResult<Prisma.$EstrenoPayload, S>

  type EstrenoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EstrenoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EstrenoCountAggregateInputType | true
    }

  export interface EstrenoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estreno'], meta: { name: 'Estreno' } }
    /**
     * Find zero or one Estreno that matches the filter.
     * @param {EstrenoFindUniqueArgs} args - Arguments to find a Estreno
     * @example
     * // Get one Estreno
     * const estreno = await prisma.estreno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstrenoFindUniqueArgs>(args: SelectSubset<T, EstrenoFindUniqueArgs<ExtArgs>>): Prisma__EstrenoClient<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Estreno that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EstrenoFindUniqueOrThrowArgs} args - Arguments to find a Estreno
     * @example
     * // Get one Estreno
     * const estreno = await prisma.estreno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstrenoFindUniqueOrThrowArgs>(args: SelectSubset<T, EstrenoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstrenoClient<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Estreno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstrenoFindFirstArgs} args - Arguments to find a Estreno
     * @example
     * // Get one Estreno
     * const estreno = await prisma.estreno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstrenoFindFirstArgs>(args?: SelectSubset<T, EstrenoFindFirstArgs<ExtArgs>>): Prisma__EstrenoClient<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Estreno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstrenoFindFirstOrThrowArgs} args - Arguments to find a Estreno
     * @example
     * // Get one Estreno
     * const estreno = await prisma.estreno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstrenoFindFirstOrThrowArgs>(args?: SelectSubset<T, EstrenoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstrenoClient<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Estrenos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstrenoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estrenos
     * const estrenos = await prisma.estreno.findMany()
     * 
     * // Get first 10 Estrenos
     * const estrenos = await prisma.estreno.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estrenoWithIdOnly = await prisma.estreno.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstrenoFindManyArgs>(args?: SelectSubset<T, EstrenoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Estreno.
     * @param {EstrenoCreateArgs} args - Arguments to create a Estreno.
     * @example
     * // Create one Estreno
     * const Estreno = await prisma.estreno.create({
     *   data: {
     *     // ... data to create a Estreno
     *   }
     * })
     * 
     */
    create<T extends EstrenoCreateArgs>(args: SelectSubset<T, EstrenoCreateArgs<ExtArgs>>): Prisma__EstrenoClient<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Estrenos.
     * @param {EstrenoCreateManyArgs} args - Arguments to create many Estrenos.
     * @example
     * // Create many Estrenos
     * const estreno = await prisma.estreno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstrenoCreateManyArgs>(args?: SelectSubset<T, EstrenoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Estrenos and returns the data saved in the database.
     * @param {EstrenoCreateManyAndReturnArgs} args - Arguments to create many Estrenos.
     * @example
     * // Create many Estrenos
     * const estreno = await prisma.estreno.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Estrenos and only return the `id`
     * const estrenoWithIdOnly = await prisma.estreno.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstrenoCreateManyAndReturnArgs>(args?: SelectSubset<T, EstrenoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Estreno.
     * @param {EstrenoDeleteArgs} args - Arguments to delete one Estreno.
     * @example
     * // Delete one Estreno
     * const Estreno = await prisma.estreno.delete({
     *   where: {
     *     // ... filter to delete one Estreno
     *   }
     * })
     * 
     */
    delete<T extends EstrenoDeleteArgs>(args: SelectSubset<T, EstrenoDeleteArgs<ExtArgs>>): Prisma__EstrenoClient<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Estreno.
     * @param {EstrenoUpdateArgs} args - Arguments to update one Estreno.
     * @example
     * // Update one Estreno
     * const estreno = await prisma.estreno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstrenoUpdateArgs>(args: SelectSubset<T, EstrenoUpdateArgs<ExtArgs>>): Prisma__EstrenoClient<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Estrenos.
     * @param {EstrenoDeleteManyArgs} args - Arguments to filter Estrenos to delete.
     * @example
     * // Delete a few Estrenos
     * const { count } = await prisma.estreno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstrenoDeleteManyArgs>(args?: SelectSubset<T, EstrenoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estrenos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstrenoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estrenos
     * const estreno = await prisma.estreno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstrenoUpdateManyArgs>(args: SelectSubset<T, EstrenoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estreno.
     * @param {EstrenoUpsertArgs} args - Arguments to update or create a Estreno.
     * @example
     * // Update or create a Estreno
     * const estreno = await prisma.estreno.upsert({
     *   create: {
     *     // ... data to create a Estreno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estreno we want to update
     *   }
     * })
     */
    upsert<T extends EstrenoUpsertArgs>(args: SelectSubset<T, EstrenoUpsertArgs<ExtArgs>>): Prisma__EstrenoClient<$Result.GetResult<Prisma.$EstrenoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Estrenos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstrenoCountArgs} args - Arguments to filter Estrenos to count.
     * @example
     * // Count the number of Estrenos
     * const count = await prisma.estreno.count({
     *   where: {
     *     // ... the filter for the Estrenos we want to count
     *   }
     * })
    **/
    count<T extends EstrenoCountArgs>(
      args?: Subset<T, EstrenoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstrenoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estreno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstrenoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EstrenoAggregateArgs>(args: Subset<T, EstrenoAggregateArgs>): Prisma.PrismaPromise<GetEstrenoAggregateType<T>>

    /**
     * Group by Estreno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstrenoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EstrenoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstrenoGroupByArgs['orderBy'] }
        : { orderBy?: EstrenoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EstrenoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstrenoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estreno model
   */
  readonly fields: EstrenoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estreno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstrenoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Estreno model
   */ 
  interface EstrenoFieldRefs {
    readonly id: FieldRef<"Estreno", 'String'>
    readonly titulo: FieldRef<"Estreno", 'String'>
    readonly descripcion: FieldRef<"Estreno", 'String'>
    readonly plataforma: FieldRef<"Estreno", 'String'>
    readonly fecha_estreno: FieldRef<"Estreno", 'DateTime'>
    readonly imagen_url: FieldRef<"Estreno", 'String'>
    readonly activo: FieldRef<"Estreno", 'Boolean'>
    readonly creado_en: FieldRef<"Estreno", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Estreno findUnique
   */
  export type EstrenoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
    /**
     * Filter, which Estreno to fetch.
     */
    where: EstrenoWhereUniqueInput
  }

  /**
   * Estreno findUniqueOrThrow
   */
  export type EstrenoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
    /**
     * Filter, which Estreno to fetch.
     */
    where: EstrenoWhereUniqueInput
  }

  /**
   * Estreno findFirst
   */
  export type EstrenoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
    /**
     * Filter, which Estreno to fetch.
     */
    where?: EstrenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estrenos to fetch.
     */
    orderBy?: EstrenoOrderByWithRelationInput | EstrenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estrenos.
     */
    cursor?: EstrenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estrenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estrenos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estrenos.
     */
    distinct?: EstrenoScalarFieldEnum | EstrenoScalarFieldEnum[]
  }

  /**
   * Estreno findFirstOrThrow
   */
  export type EstrenoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
    /**
     * Filter, which Estreno to fetch.
     */
    where?: EstrenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estrenos to fetch.
     */
    orderBy?: EstrenoOrderByWithRelationInput | EstrenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estrenos.
     */
    cursor?: EstrenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estrenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estrenos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estrenos.
     */
    distinct?: EstrenoScalarFieldEnum | EstrenoScalarFieldEnum[]
  }

  /**
   * Estreno findMany
   */
  export type EstrenoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
    /**
     * Filter, which Estrenos to fetch.
     */
    where?: EstrenoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estrenos to fetch.
     */
    orderBy?: EstrenoOrderByWithRelationInput | EstrenoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estrenos.
     */
    cursor?: EstrenoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estrenos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estrenos.
     */
    skip?: number
    distinct?: EstrenoScalarFieldEnum | EstrenoScalarFieldEnum[]
  }

  /**
   * Estreno create
   */
  export type EstrenoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
    /**
     * The data needed to create a Estreno.
     */
    data: XOR<EstrenoCreateInput, EstrenoUncheckedCreateInput>
  }

  /**
   * Estreno createMany
   */
  export type EstrenoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estrenos.
     */
    data: EstrenoCreateManyInput | EstrenoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estreno createManyAndReturn
   */
  export type EstrenoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Estrenos.
     */
    data: EstrenoCreateManyInput | EstrenoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Estreno update
   */
  export type EstrenoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
    /**
     * The data needed to update a Estreno.
     */
    data: XOR<EstrenoUpdateInput, EstrenoUncheckedUpdateInput>
    /**
     * Choose, which Estreno to update.
     */
    where: EstrenoWhereUniqueInput
  }

  /**
   * Estreno updateMany
   */
  export type EstrenoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estrenos.
     */
    data: XOR<EstrenoUpdateManyMutationInput, EstrenoUncheckedUpdateManyInput>
    /**
     * Filter which Estrenos to update
     */
    where?: EstrenoWhereInput
  }

  /**
   * Estreno upsert
   */
  export type EstrenoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
    /**
     * The filter to search for the Estreno to update in case it exists.
     */
    where: EstrenoWhereUniqueInput
    /**
     * In case the Estreno found by the `where` argument doesn't exist, create a new Estreno with this data.
     */
    create: XOR<EstrenoCreateInput, EstrenoUncheckedCreateInput>
    /**
     * In case the Estreno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstrenoUpdateInput, EstrenoUncheckedUpdateInput>
  }

  /**
   * Estreno delete
   */
  export type EstrenoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
    /**
     * Filter which Estreno to delete.
     */
    where: EstrenoWhereUniqueInput
  }

  /**
   * Estreno deleteMany
   */
  export type EstrenoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estrenos to delete
     */
    where?: EstrenoWhereInput
  }

  /**
   * Estreno without action
   */
  export type EstrenoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estreno
     */
    select?: EstrenoSelect<ExtArgs> | null
  }


  /**
   * Model ServicioBase
   */

  export type AggregateServicioBase = {
    _count: ServicioBaseCountAggregateOutputType | null
    _avg: ServicioBaseAvgAggregateOutputType | null
    _sum: ServicioBaseSumAggregateOutputType | null
    _min: ServicioBaseMinAggregateOutputType | null
    _max: ServicioBaseMaxAggregateOutputType | null
  }

  export type ServicioBaseAvgAggregateOutputType = {
    precio_sugerido: number | null
    comision_pct: number | null
  }

  export type ServicioBaseSumAggregateOutputType = {
    precio_sugerido: number | null
    comision_pct: number | null
  }

  export type ServicioBaseMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    logo_url: string | null
    descripcion_base: string | null
    precio_sugerido: number | null
    categoria: string | null
    es_iptv_propio: boolean | null
    estado_actual: string | null
    nota_estado: string | null
    proveedor_id: string | null
    comision_pct: number | null
    estado_aprobacion: string | null
    activo: boolean | null
  }

  export type ServicioBaseMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    logo_url: string | null
    descripcion_base: string | null
    precio_sugerido: number | null
    categoria: string | null
    es_iptv_propio: boolean | null
    estado_actual: string | null
    nota_estado: string | null
    proveedor_id: string | null
    comision_pct: number | null
    estado_aprobacion: string | null
    activo: boolean | null
  }

  export type ServicioBaseCountAggregateOutputType = {
    id: number
    nombre: number
    logo_url: number
    descripcion_base: number
    precio_sugerido: number
    categoria: number
    es_iptv_propio: number
    estado_actual: number
    nota_estado: number
    proveedor_id: number
    comision_pct: number
    estado_aprobacion: number
    activo: number
    _all: number
  }


  export type ServicioBaseAvgAggregateInputType = {
    precio_sugerido?: true
    comision_pct?: true
  }

  export type ServicioBaseSumAggregateInputType = {
    precio_sugerido?: true
    comision_pct?: true
  }

  export type ServicioBaseMinAggregateInputType = {
    id?: true
    nombre?: true
    logo_url?: true
    descripcion_base?: true
    precio_sugerido?: true
    categoria?: true
    es_iptv_propio?: true
    estado_actual?: true
    nota_estado?: true
    proveedor_id?: true
    comision_pct?: true
    estado_aprobacion?: true
    activo?: true
  }

  export type ServicioBaseMaxAggregateInputType = {
    id?: true
    nombre?: true
    logo_url?: true
    descripcion_base?: true
    precio_sugerido?: true
    categoria?: true
    es_iptv_propio?: true
    estado_actual?: true
    nota_estado?: true
    proveedor_id?: true
    comision_pct?: true
    estado_aprobacion?: true
    activo?: true
  }

  export type ServicioBaseCountAggregateInputType = {
    id?: true
    nombre?: true
    logo_url?: true
    descripcion_base?: true
    precio_sugerido?: true
    categoria?: true
    es_iptv_propio?: true
    estado_actual?: true
    nota_estado?: true
    proveedor_id?: true
    comision_pct?: true
    estado_aprobacion?: true
    activo?: true
    _all?: true
  }

  export type ServicioBaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioBase to aggregate.
     */
    where?: ServicioBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioBases to fetch.
     */
    orderBy?: ServicioBaseOrderByWithRelationInput | ServicioBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicioBases
    **/
    _count?: true | ServicioBaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioBaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioBaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioBaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioBaseMaxAggregateInputType
  }

  export type GetServicioBaseAggregateType<T extends ServicioBaseAggregateArgs> = {
        [P in keyof T & keyof AggregateServicioBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicioBase[P]>
      : GetScalarType<T[P], AggregateServicioBase[P]>
  }




  export type ServicioBaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioBaseWhereInput
    orderBy?: ServicioBaseOrderByWithAggregationInput | ServicioBaseOrderByWithAggregationInput[]
    by: ServicioBaseScalarFieldEnum[] | ServicioBaseScalarFieldEnum
    having?: ServicioBaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioBaseCountAggregateInputType | true
    _avg?: ServicioBaseAvgAggregateInputType
    _sum?: ServicioBaseSumAggregateInputType
    _min?: ServicioBaseMinAggregateInputType
    _max?: ServicioBaseMaxAggregateInputType
  }

  export type ServicioBaseGroupByOutputType = {
    id: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria: string
    es_iptv_propio: boolean
    estado_actual: string
    nota_estado: string | null
    proveedor_id: string | null
    comision_pct: number
    estado_aprobacion: string
    activo: boolean
    _count: ServicioBaseCountAggregateOutputType | null
    _avg: ServicioBaseAvgAggregateOutputType | null
    _sum: ServicioBaseSumAggregateOutputType | null
    _min: ServicioBaseMinAggregateOutputType | null
    _max: ServicioBaseMaxAggregateOutputType | null
  }

  type GetServicioBaseGroupByPayload<T extends ServicioBaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioBaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioBaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioBaseGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioBaseGroupByOutputType[P]>
        }
      >
    >


  export type ServicioBaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    logo_url?: boolean
    descripcion_base?: boolean
    precio_sugerido?: boolean
    categoria?: boolean
    es_iptv_propio?: boolean
    estado_actual?: boolean
    nota_estado?: boolean
    proveedor_id?: boolean
    comision_pct?: boolean
    estado_aprobacion?: boolean
    activo?: boolean
    mis_servicios?: boolean | ServicioBase$mis_serviciosArgs<ExtArgs>
    proveedor?: boolean | ServicioBase$proveedorArgs<ExtArgs>
    clicks?: boolean | ServicioBase$clicksArgs<ExtArgs>
    imagenes?: boolean | ServicioBase$imagenesArgs<ExtArgs>
    _count?: boolean | ServicioBaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicioBase"]>

  export type ServicioBaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    logo_url?: boolean
    descripcion_base?: boolean
    precio_sugerido?: boolean
    categoria?: boolean
    es_iptv_propio?: boolean
    estado_actual?: boolean
    nota_estado?: boolean
    proveedor_id?: boolean
    comision_pct?: boolean
    estado_aprobacion?: boolean
    activo?: boolean
    proveedor?: boolean | ServicioBase$proveedorArgs<ExtArgs>
  }, ExtArgs["result"]["servicioBase"]>

  export type ServicioBaseSelectScalar = {
    id?: boolean
    nombre?: boolean
    logo_url?: boolean
    descripcion_base?: boolean
    precio_sugerido?: boolean
    categoria?: boolean
    es_iptv_propio?: boolean
    estado_actual?: boolean
    nota_estado?: boolean
    proveedor_id?: boolean
    comision_pct?: boolean
    estado_aprobacion?: boolean
    activo?: boolean
  }

  export type ServicioBaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mis_servicios?: boolean | ServicioBase$mis_serviciosArgs<ExtArgs>
    proveedor?: boolean | ServicioBase$proveedorArgs<ExtArgs>
    clicks?: boolean | ServicioBase$clicksArgs<ExtArgs>
    imagenes?: boolean | ServicioBase$imagenesArgs<ExtArgs>
    _count?: boolean | ServicioBaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicioBaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proveedor?: boolean | ServicioBase$proveedorArgs<ExtArgs>
  }

  export type $ServicioBasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicioBase"
    objects: {
      mis_servicios: Prisma.$MiServicioPayload<ExtArgs>[]
      proveedor: Prisma.$VendorPayload<ExtArgs> | null
      clicks: Prisma.$ClickMarketplacePayload<ExtArgs>[]
      imagenes: Prisma.$ImagenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      logo_url: string
      descripcion_base: string
      precio_sugerido: number
      categoria: string
      es_iptv_propio: boolean
      estado_actual: string
      nota_estado: string | null
      proveedor_id: string | null
      comision_pct: number
      estado_aprobacion: string
      activo: boolean
    }, ExtArgs["result"]["servicioBase"]>
    composites: {}
  }

  type ServicioBaseGetPayload<S extends boolean | null | undefined | ServicioBaseDefaultArgs> = $Result.GetResult<Prisma.$ServicioBasePayload, S>

  type ServicioBaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServicioBaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServicioBaseCountAggregateInputType | true
    }

  export interface ServicioBaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicioBase'], meta: { name: 'ServicioBase' } }
    /**
     * Find zero or one ServicioBase that matches the filter.
     * @param {ServicioBaseFindUniqueArgs} args - Arguments to find a ServicioBase
     * @example
     * // Get one ServicioBase
     * const servicioBase = await prisma.servicioBase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioBaseFindUniqueArgs>(args: SelectSubset<T, ServicioBaseFindUniqueArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServicioBase that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServicioBaseFindUniqueOrThrowArgs} args - Arguments to find a ServicioBase
     * @example
     * // Get one ServicioBase
     * const servicioBase = await prisma.servicioBase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioBaseFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioBaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServicioBase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioBaseFindFirstArgs} args - Arguments to find a ServicioBase
     * @example
     * // Get one ServicioBase
     * const servicioBase = await prisma.servicioBase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioBaseFindFirstArgs>(args?: SelectSubset<T, ServicioBaseFindFirstArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServicioBase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioBaseFindFirstOrThrowArgs} args - Arguments to find a ServicioBase
     * @example
     * // Get one ServicioBase
     * const servicioBase = await prisma.servicioBase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioBaseFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioBaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServicioBases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioBaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicioBases
     * const servicioBases = await prisma.servicioBase.findMany()
     * 
     * // Get first 10 ServicioBases
     * const servicioBases = await prisma.servicioBase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioBaseWithIdOnly = await prisma.servicioBase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioBaseFindManyArgs>(args?: SelectSubset<T, ServicioBaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServicioBase.
     * @param {ServicioBaseCreateArgs} args - Arguments to create a ServicioBase.
     * @example
     * // Create one ServicioBase
     * const ServicioBase = await prisma.servicioBase.create({
     *   data: {
     *     // ... data to create a ServicioBase
     *   }
     * })
     * 
     */
    create<T extends ServicioBaseCreateArgs>(args: SelectSubset<T, ServicioBaseCreateArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServicioBases.
     * @param {ServicioBaseCreateManyArgs} args - Arguments to create many ServicioBases.
     * @example
     * // Create many ServicioBases
     * const servicioBase = await prisma.servicioBase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioBaseCreateManyArgs>(args?: SelectSubset<T, ServicioBaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicioBases and returns the data saved in the database.
     * @param {ServicioBaseCreateManyAndReturnArgs} args - Arguments to create many ServicioBases.
     * @example
     * // Create many ServicioBases
     * const servicioBase = await prisma.servicioBase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicioBases and only return the `id`
     * const servicioBaseWithIdOnly = await prisma.servicioBase.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioBaseCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioBaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServicioBase.
     * @param {ServicioBaseDeleteArgs} args - Arguments to delete one ServicioBase.
     * @example
     * // Delete one ServicioBase
     * const ServicioBase = await prisma.servicioBase.delete({
     *   where: {
     *     // ... filter to delete one ServicioBase
     *   }
     * })
     * 
     */
    delete<T extends ServicioBaseDeleteArgs>(args: SelectSubset<T, ServicioBaseDeleteArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServicioBase.
     * @param {ServicioBaseUpdateArgs} args - Arguments to update one ServicioBase.
     * @example
     * // Update one ServicioBase
     * const servicioBase = await prisma.servicioBase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioBaseUpdateArgs>(args: SelectSubset<T, ServicioBaseUpdateArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServicioBases.
     * @param {ServicioBaseDeleteManyArgs} args - Arguments to filter ServicioBases to delete.
     * @example
     * // Delete a few ServicioBases
     * const { count } = await prisma.servicioBase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioBaseDeleteManyArgs>(args?: SelectSubset<T, ServicioBaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicioBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioBaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicioBases
     * const servicioBase = await prisma.servicioBase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioBaseUpdateManyArgs>(args: SelectSubset<T, ServicioBaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServicioBase.
     * @param {ServicioBaseUpsertArgs} args - Arguments to update or create a ServicioBase.
     * @example
     * // Update or create a ServicioBase
     * const servicioBase = await prisma.servicioBase.upsert({
     *   create: {
     *     // ... data to create a ServicioBase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicioBase we want to update
     *   }
     * })
     */
    upsert<T extends ServicioBaseUpsertArgs>(args: SelectSubset<T, ServicioBaseUpsertArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServicioBases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioBaseCountArgs} args - Arguments to filter ServicioBases to count.
     * @example
     * // Count the number of ServicioBases
     * const count = await prisma.servicioBase.count({
     *   where: {
     *     // ... the filter for the ServicioBases we want to count
     *   }
     * })
    **/
    count<T extends ServicioBaseCountArgs>(
      args?: Subset<T, ServicioBaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioBaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicioBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioBaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioBaseAggregateArgs>(args: Subset<T, ServicioBaseAggregateArgs>): Prisma.PrismaPromise<GetServicioBaseAggregateType<T>>

    /**
     * Group by ServicioBase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioBaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioBaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioBaseGroupByArgs['orderBy'] }
        : { orderBy?: ServicioBaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioBaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicioBase model
   */
  readonly fields: ServicioBaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicioBase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioBaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mis_servicios<T extends ServicioBase$mis_serviciosArgs<ExtArgs> = {}>(args?: Subset<T, ServicioBase$mis_serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "findMany"> | Null>
    proveedor<T extends ServicioBase$proveedorArgs<ExtArgs> = {}>(args?: Subset<T, ServicioBase$proveedorArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    clicks<T extends ServicioBase$clicksArgs<ExtArgs> = {}>(args?: Subset<T, ServicioBase$clicksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "findMany"> | Null>
    imagenes<T extends ServicioBase$imagenesArgs<ExtArgs> = {}>(args?: Subset<T, ServicioBase$imagenesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicioBase model
   */ 
  interface ServicioBaseFieldRefs {
    readonly id: FieldRef<"ServicioBase", 'String'>
    readonly nombre: FieldRef<"ServicioBase", 'String'>
    readonly logo_url: FieldRef<"ServicioBase", 'String'>
    readonly descripcion_base: FieldRef<"ServicioBase", 'String'>
    readonly precio_sugerido: FieldRef<"ServicioBase", 'Float'>
    readonly categoria: FieldRef<"ServicioBase", 'String'>
    readonly es_iptv_propio: FieldRef<"ServicioBase", 'Boolean'>
    readonly estado_actual: FieldRef<"ServicioBase", 'String'>
    readonly nota_estado: FieldRef<"ServicioBase", 'String'>
    readonly proveedor_id: FieldRef<"ServicioBase", 'String'>
    readonly comision_pct: FieldRef<"ServicioBase", 'Float'>
    readonly estado_aprobacion: FieldRef<"ServicioBase", 'String'>
    readonly activo: FieldRef<"ServicioBase", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ServicioBase findUnique
   */
  export type ServicioBaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    /**
     * Filter, which ServicioBase to fetch.
     */
    where: ServicioBaseWhereUniqueInput
  }

  /**
   * ServicioBase findUniqueOrThrow
   */
  export type ServicioBaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    /**
     * Filter, which ServicioBase to fetch.
     */
    where: ServicioBaseWhereUniqueInput
  }

  /**
   * ServicioBase findFirst
   */
  export type ServicioBaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    /**
     * Filter, which ServicioBase to fetch.
     */
    where?: ServicioBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioBases to fetch.
     */
    orderBy?: ServicioBaseOrderByWithRelationInput | ServicioBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioBases.
     */
    cursor?: ServicioBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioBases.
     */
    distinct?: ServicioBaseScalarFieldEnum | ServicioBaseScalarFieldEnum[]
  }

  /**
   * ServicioBase findFirstOrThrow
   */
  export type ServicioBaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    /**
     * Filter, which ServicioBase to fetch.
     */
    where?: ServicioBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioBases to fetch.
     */
    orderBy?: ServicioBaseOrderByWithRelationInput | ServicioBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioBases.
     */
    cursor?: ServicioBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioBases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioBases.
     */
    distinct?: ServicioBaseScalarFieldEnum | ServicioBaseScalarFieldEnum[]
  }

  /**
   * ServicioBase findMany
   */
  export type ServicioBaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    /**
     * Filter, which ServicioBases to fetch.
     */
    where?: ServicioBaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioBases to fetch.
     */
    orderBy?: ServicioBaseOrderByWithRelationInput | ServicioBaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicioBases.
     */
    cursor?: ServicioBaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioBases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioBases.
     */
    skip?: number
    distinct?: ServicioBaseScalarFieldEnum | ServicioBaseScalarFieldEnum[]
  }

  /**
   * ServicioBase create
   */
  export type ServicioBaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicioBase.
     */
    data: XOR<ServicioBaseCreateInput, ServicioBaseUncheckedCreateInput>
  }

  /**
   * ServicioBase createMany
   */
  export type ServicioBaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicioBases.
     */
    data: ServicioBaseCreateManyInput | ServicioBaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicioBase createManyAndReturn
   */
  export type ServicioBaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServicioBases.
     */
    data: ServicioBaseCreateManyInput | ServicioBaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicioBase update
   */
  export type ServicioBaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicioBase.
     */
    data: XOR<ServicioBaseUpdateInput, ServicioBaseUncheckedUpdateInput>
    /**
     * Choose, which ServicioBase to update.
     */
    where: ServicioBaseWhereUniqueInput
  }

  /**
   * ServicioBase updateMany
   */
  export type ServicioBaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicioBases.
     */
    data: XOR<ServicioBaseUpdateManyMutationInput, ServicioBaseUncheckedUpdateManyInput>
    /**
     * Filter which ServicioBases to update
     */
    where?: ServicioBaseWhereInput
  }

  /**
   * ServicioBase upsert
   */
  export type ServicioBaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicioBase to update in case it exists.
     */
    where: ServicioBaseWhereUniqueInput
    /**
     * In case the ServicioBase found by the `where` argument doesn't exist, create a new ServicioBase with this data.
     */
    create: XOR<ServicioBaseCreateInput, ServicioBaseUncheckedCreateInput>
    /**
     * In case the ServicioBase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioBaseUpdateInput, ServicioBaseUncheckedUpdateInput>
  }

  /**
   * ServicioBase delete
   */
  export type ServicioBaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    /**
     * Filter which ServicioBase to delete.
     */
    where: ServicioBaseWhereUniqueInput
  }

  /**
   * ServicioBase deleteMany
   */
  export type ServicioBaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioBases to delete
     */
    where?: ServicioBaseWhereInput
  }

  /**
   * ServicioBase.mis_servicios
   */
  export type ServicioBase$mis_serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    where?: MiServicioWhereInput
    orderBy?: MiServicioOrderByWithRelationInput | MiServicioOrderByWithRelationInput[]
    cursor?: MiServicioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MiServicioScalarFieldEnum | MiServicioScalarFieldEnum[]
  }

  /**
   * ServicioBase.proveedor
   */
  export type ServicioBase$proveedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vendor
     */
    select?: VendorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VendorInclude<ExtArgs> | null
    where?: VendorWhereInput
  }

  /**
   * ServicioBase.clicks
   */
  export type ServicioBase$clicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    where?: ClickMarketplaceWhereInput
    orderBy?: ClickMarketplaceOrderByWithRelationInput | ClickMarketplaceOrderByWithRelationInput[]
    cursor?: ClickMarketplaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClickMarketplaceScalarFieldEnum | ClickMarketplaceScalarFieldEnum[]
  }

  /**
   * ServicioBase.imagenes
   */
  export type ServicioBase$imagenesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    where?: ImagenWhereInput
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    cursor?: ImagenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * ServicioBase without action
   */
  export type ServicioBaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
  }


  /**
   * Model MiServicio
   */

  export type AggregateMiServicio = {
    _count: MiServicioCountAggregateOutputType | null
    _avg: MiServicioAvgAggregateOutputType | null
    _sum: MiServicioSumAggregateOutputType | null
    _min: MiServicioMinAggregateOutputType | null
    _max: MiServicioMaxAggregateOutputType | null
  }

  export type MiServicioAvgAggregateOutputType = {
    precio_venta: number | null
  }

  export type MiServicioSumAggregateOutputType = {
    precio_venta: number | null
  }

  export type MiServicioMinAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    servicio_id: string | null
    precio_venta: number | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type MiServicioMaxAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    servicio_id: string | null
    precio_venta: number | null
    activo: boolean | null
    creado_en: Date | null
  }

  export type MiServicioCountAggregateOutputType = {
    id: number
    vendor_id: number
    servicio_id: number
    precio_venta: number
    activo: number
    creado_en: number
    _all: number
  }


  export type MiServicioAvgAggregateInputType = {
    precio_venta?: true
  }

  export type MiServicioSumAggregateInputType = {
    precio_venta?: true
  }

  export type MiServicioMinAggregateInputType = {
    id?: true
    vendor_id?: true
    servicio_id?: true
    precio_venta?: true
    activo?: true
    creado_en?: true
  }

  export type MiServicioMaxAggregateInputType = {
    id?: true
    vendor_id?: true
    servicio_id?: true
    precio_venta?: true
    activo?: true
    creado_en?: true
  }

  export type MiServicioCountAggregateInputType = {
    id?: true
    vendor_id?: true
    servicio_id?: true
    precio_venta?: true
    activo?: true
    creado_en?: true
    _all?: true
  }

  export type MiServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiServicio to aggregate.
     */
    where?: MiServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiServicios to fetch.
     */
    orderBy?: MiServicioOrderByWithRelationInput | MiServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MiServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MiServicios
    **/
    _count?: true | MiServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MiServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MiServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MiServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MiServicioMaxAggregateInputType
  }

  export type GetMiServicioAggregateType<T extends MiServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateMiServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMiServicio[P]>
      : GetScalarType<T[P], AggregateMiServicio[P]>
  }




  export type MiServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MiServicioWhereInput
    orderBy?: MiServicioOrderByWithAggregationInput | MiServicioOrderByWithAggregationInput[]
    by: MiServicioScalarFieldEnum[] | MiServicioScalarFieldEnum
    having?: MiServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MiServicioCountAggregateInputType | true
    _avg?: MiServicioAvgAggregateInputType
    _sum?: MiServicioSumAggregateInputType
    _min?: MiServicioMinAggregateInputType
    _max?: MiServicioMaxAggregateInputType
  }

  export type MiServicioGroupByOutputType = {
    id: string
    vendor_id: string
    servicio_id: string
    precio_venta: number
    activo: boolean
    creado_en: Date
    _count: MiServicioCountAggregateOutputType | null
    _avg: MiServicioAvgAggregateOutputType | null
    _sum: MiServicioSumAggregateOutputType | null
    _min: MiServicioMinAggregateOutputType | null
    _max: MiServicioMaxAggregateOutputType | null
  }

  type GetMiServicioGroupByPayload<T extends MiServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MiServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MiServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MiServicioGroupByOutputType[P]>
            : GetScalarType<T[P], MiServicioGroupByOutputType[P]>
        }
      >
    >


  export type MiServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor_id?: boolean
    servicio_id?: boolean
    precio_venta?: boolean
    activo?: boolean
    creado_en?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miServicio"]>

  export type MiServicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor_id?: boolean
    servicio_id?: boolean
    precio_venta?: boolean
    activo?: boolean
    creado_en?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["miServicio"]>

  export type MiServicioSelectScalar = {
    id?: boolean
    vendor_id?: boolean
    servicio_id?: boolean
    precio_venta?: boolean
    activo?: boolean
    creado_en?: boolean
  }

  export type MiServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioBaseDefaultArgs<ExtArgs>
  }
  export type MiServicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioBaseDefaultArgs<ExtArgs>
  }

  export type $MiServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MiServicio"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      servicio: Prisma.$ServicioBasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendor_id: string
      servicio_id: string
      precio_venta: number
      activo: boolean
      creado_en: Date
    }, ExtArgs["result"]["miServicio"]>
    composites: {}
  }

  type MiServicioGetPayload<S extends boolean | null | undefined | MiServicioDefaultArgs> = $Result.GetResult<Prisma.$MiServicioPayload, S>

  type MiServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MiServicioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MiServicioCountAggregateInputType | true
    }

  export interface MiServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MiServicio'], meta: { name: 'MiServicio' } }
    /**
     * Find zero or one MiServicio that matches the filter.
     * @param {MiServicioFindUniqueArgs} args - Arguments to find a MiServicio
     * @example
     * // Get one MiServicio
     * const miServicio = await prisma.miServicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MiServicioFindUniqueArgs>(args: SelectSubset<T, MiServicioFindUniqueArgs<ExtArgs>>): Prisma__MiServicioClient<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MiServicio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MiServicioFindUniqueOrThrowArgs} args - Arguments to find a MiServicio
     * @example
     * // Get one MiServicio
     * const miServicio = await prisma.miServicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MiServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, MiServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MiServicioClient<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MiServicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiServicioFindFirstArgs} args - Arguments to find a MiServicio
     * @example
     * // Get one MiServicio
     * const miServicio = await prisma.miServicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MiServicioFindFirstArgs>(args?: SelectSubset<T, MiServicioFindFirstArgs<ExtArgs>>): Prisma__MiServicioClient<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MiServicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiServicioFindFirstOrThrowArgs} args - Arguments to find a MiServicio
     * @example
     * // Get one MiServicio
     * const miServicio = await prisma.miServicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MiServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, MiServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__MiServicioClient<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MiServicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MiServicios
     * const miServicios = await prisma.miServicio.findMany()
     * 
     * // Get first 10 MiServicios
     * const miServicios = await prisma.miServicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const miServicioWithIdOnly = await prisma.miServicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MiServicioFindManyArgs>(args?: SelectSubset<T, MiServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MiServicio.
     * @param {MiServicioCreateArgs} args - Arguments to create a MiServicio.
     * @example
     * // Create one MiServicio
     * const MiServicio = await prisma.miServicio.create({
     *   data: {
     *     // ... data to create a MiServicio
     *   }
     * })
     * 
     */
    create<T extends MiServicioCreateArgs>(args: SelectSubset<T, MiServicioCreateArgs<ExtArgs>>): Prisma__MiServicioClient<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MiServicios.
     * @param {MiServicioCreateManyArgs} args - Arguments to create many MiServicios.
     * @example
     * // Create many MiServicios
     * const miServicio = await prisma.miServicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MiServicioCreateManyArgs>(args?: SelectSubset<T, MiServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MiServicios and returns the data saved in the database.
     * @param {MiServicioCreateManyAndReturnArgs} args - Arguments to create many MiServicios.
     * @example
     * // Create many MiServicios
     * const miServicio = await prisma.miServicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MiServicios and only return the `id`
     * const miServicioWithIdOnly = await prisma.miServicio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MiServicioCreateManyAndReturnArgs>(args?: SelectSubset<T, MiServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MiServicio.
     * @param {MiServicioDeleteArgs} args - Arguments to delete one MiServicio.
     * @example
     * // Delete one MiServicio
     * const MiServicio = await prisma.miServicio.delete({
     *   where: {
     *     // ... filter to delete one MiServicio
     *   }
     * })
     * 
     */
    delete<T extends MiServicioDeleteArgs>(args: SelectSubset<T, MiServicioDeleteArgs<ExtArgs>>): Prisma__MiServicioClient<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MiServicio.
     * @param {MiServicioUpdateArgs} args - Arguments to update one MiServicio.
     * @example
     * // Update one MiServicio
     * const miServicio = await prisma.miServicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MiServicioUpdateArgs>(args: SelectSubset<T, MiServicioUpdateArgs<ExtArgs>>): Prisma__MiServicioClient<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MiServicios.
     * @param {MiServicioDeleteManyArgs} args - Arguments to filter MiServicios to delete.
     * @example
     * // Delete a few MiServicios
     * const { count } = await prisma.miServicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MiServicioDeleteManyArgs>(args?: SelectSubset<T, MiServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MiServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MiServicios
     * const miServicio = await prisma.miServicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MiServicioUpdateManyArgs>(args: SelectSubset<T, MiServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MiServicio.
     * @param {MiServicioUpsertArgs} args - Arguments to update or create a MiServicio.
     * @example
     * // Update or create a MiServicio
     * const miServicio = await prisma.miServicio.upsert({
     *   create: {
     *     // ... data to create a MiServicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MiServicio we want to update
     *   }
     * })
     */
    upsert<T extends MiServicioUpsertArgs>(args: SelectSubset<T, MiServicioUpsertArgs<ExtArgs>>): Prisma__MiServicioClient<$Result.GetResult<Prisma.$MiServicioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MiServicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiServicioCountArgs} args - Arguments to filter MiServicios to count.
     * @example
     * // Count the number of MiServicios
     * const count = await prisma.miServicio.count({
     *   where: {
     *     // ... the filter for the MiServicios we want to count
     *   }
     * })
    **/
    count<T extends MiServicioCountArgs>(
      args?: Subset<T, MiServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MiServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MiServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MiServicioAggregateArgs>(args: Subset<T, MiServicioAggregateArgs>): Prisma.PrismaPromise<GetMiServicioAggregateType<T>>

    /**
     * Group by MiServicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MiServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MiServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MiServicioGroupByArgs['orderBy'] }
        : { orderBy?: MiServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MiServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMiServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MiServicio model
   */
  readonly fields: MiServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MiServicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MiServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    servicio<T extends ServicioBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioBaseDefaultArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MiServicio model
   */ 
  interface MiServicioFieldRefs {
    readonly id: FieldRef<"MiServicio", 'String'>
    readonly vendor_id: FieldRef<"MiServicio", 'String'>
    readonly servicio_id: FieldRef<"MiServicio", 'String'>
    readonly precio_venta: FieldRef<"MiServicio", 'Float'>
    readonly activo: FieldRef<"MiServicio", 'Boolean'>
    readonly creado_en: FieldRef<"MiServicio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MiServicio findUnique
   */
  export type MiServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    /**
     * Filter, which MiServicio to fetch.
     */
    where: MiServicioWhereUniqueInput
  }

  /**
   * MiServicio findUniqueOrThrow
   */
  export type MiServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    /**
     * Filter, which MiServicio to fetch.
     */
    where: MiServicioWhereUniqueInput
  }

  /**
   * MiServicio findFirst
   */
  export type MiServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    /**
     * Filter, which MiServicio to fetch.
     */
    where?: MiServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiServicios to fetch.
     */
    orderBy?: MiServicioOrderByWithRelationInput | MiServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiServicios.
     */
    cursor?: MiServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiServicios.
     */
    distinct?: MiServicioScalarFieldEnum | MiServicioScalarFieldEnum[]
  }

  /**
   * MiServicio findFirstOrThrow
   */
  export type MiServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    /**
     * Filter, which MiServicio to fetch.
     */
    where?: MiServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiServicios to fetch.
     */
    orderBy?: MiServicioOrderByWithRelationInput | MiServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MiServicios.
     */
    cursor?: MiServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiServicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MiServicios.
     */
    distinct?: MiServicioScalarFieldEnum | MiServicioScalarFieldEnum[]
  }

  /**
   * MiServicio findMany
   */
  export type MiServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    /**
     * Filter, which MiServicios to fetch.
     */
    where?: MiServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MiServicios to fetch.
     */
    orderBy?: MiServicioOrderByWithRelationInput | MiServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MiServicios.
     */
    cursor?: MiServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MiServicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MiServicios.
     */
    skip?: number
    distinct?: MiServicioScalarFieldEnum | MiServicioScalarFieldEnum[]
  }

  /**
   * MiServicio create
   */
  export type MiServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a MiServicio.
     */
    data: XOR<MiServicioCreateInput, MiServicioUncheckedCreateInput>
  }

  /**
   * MiServicio createMany
   */
  export type MiServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MiServicios.
     */
    data: MiServicioCreateManyInput | MiServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MiServicio createManyAndReturn
   */
  export type MiServicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MiServicios.
     */
    data: MiServicioCreateManyInput | MiServicioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MiServicio update
   */
  export type MiServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a MiServicio.
     */
    data: XOR<MiServicioUpdateInput, MiServicioUncheckedUpdateInput>
    /**
     * Choose, which MiServicio to update.
     */
    where: MiServicioWhereUniqueInput
  }

  /**
   * MiServicio updateMany
   */
  export type MiServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MiServicios.
     */
    data: XOR<MiServicioUpdateManyMutationInput, MiServicioUncheckedUpdateManyInput>
    /**
     * Filter which MiServicios to update
     */
    where?: MiServicioWhereInput
  }

  /**
   * MiServicio upsert
   */
  export type MiServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the MiServicio to update in case it exists.
     */
    where: MiServicioWhereUniqueInput
    /**
     * In case the MiServicio found by the `where` argument doesn't exist, create a new MiServicio with this data.
     */
    create: XOR<MiServicioCreateInput, MiServicioUncheckedCreateInput>
    /**
     * In case the MiServicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MiServicioUpdateInput, MiServicioUncheckedUpdateInput>
  }

  /**
   * MiServicio delete
   */
  export type MiServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
    /**
     * Filter which MiServicio to delete.
     */
    where: MiServicioWhereUniqueInput
  }

  /**
   * MiServicio deleteMany
   */
  export type MiServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MiServicios to delete
     */
    where?: MiServicioWhereInput
  }

  /**
   * MiServicio without action
   */
  export type MiServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MiServicio
     */
    select?: MiServicioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MiServicioInclude<ExtArgs> | null
  }


  /**
   * Model Imagen
   */

  export type AggregateImagen = {
    _count: ImagenCountAggregateOutputType | null
    _min: ImagenMinAggregateOutputType | null
    _max: ImagenMaxAggregateOutputType | null
  }

  export type ImagenMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    public_id: string | null
    url_base: string | null
    etiquetas: string | null
    categoria: string | null
    activo: boolean | null
    creado_en: Date | null
    servicio_id: string | null
  }

  export type ImagenMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    public_id: string | null
    url_base: string | null
    etiquetas: string | null
    categoria: string | null
    activo: boolean | null
    creado_en: Date | null
    servicio_id: string | null
  }

  export type ImagenCountAggregateOutputType = {
    id: number
    titulo: number
    public_id: number
    url_base: number
    etiquetas: number
    categoria: number
    activo: number
    creado_en: number
    servicio_id: number
    _all: number
  }


  export type ImagenMinAggregateInputType = {
    id?: true
    titulo?: true
    public_id?: true
    url_base?: true
    etiquetas?: true
    categoria?: true
    activo?: true
    creado_en?: true
    servicio_id?: true
  }

  export type ImagenMaxAggregateInputType = {
    id?: true
    titulo?: true
    public_id?: true
    url_base?: true
    etiquetas?: true
    categoria?: true
    activo?: true
    creado_en?: true
    servicio_id?: true
  }

  export type ImagenCountAggregateInputType = {
    id?: true
    titulo?: true
    public_id?: true
    url_base?: true
    etiquetas?: true
    categoria?: true
    activo?: true
    creado_en?: true
    servicio_id?: true
    _all?: true
  }

  export type ImagenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagen to aggregate.
     */
    where?: ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagens to fetch.
     */
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imagens
    **/
    _count?: true | ImagenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagenMaxAggregateInputType
  }

  export type GetImagenAggregateType<T extends ImagenAggregateArgs> = {
        [P in keyof T & keyof AggregateImagen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagen[P]>
      : GetScalarType<T[P], AggregateImagen[P]>
  }




  export type ImagenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagenWhereInput
    orderBy?: ImagenOrderByWithAggregationInput | ImagenOrderByWithAggregationInput[]
    by: ImagenScalarFieldEnum[] | ImagenScalarFieldEnum
    having?: ImagenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagenCountAggregateInputType | true
    _min?: ImagenMinAggregateInputType
    _max?: ImagenMaxAggregateInputType
  }

  export type ImagenGroupByOutputType = {
    id: string
    titulo: string
    public_id: string
    url_base: string
    etiquetas: string
    categoria: string
    activo: boolean
    creado_en: Date
    servicio_id: string | null
    _count: ImagenCountAggregateOutputType | null
    _min: ImagenMinAggregateOutputType | null
    _max: ImagenMaxAggregateOutputType | null
  }

  type GetImagenGroupByPayload<T extends ImagenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagenGroupByOutputType[P]>
            : GetScalarType<T[P], ImagenGroupByOutputType[P]>
        }
      >
    >


  export type ImagenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    public_id?: boolean
    url_base?: boolean
    etiquetas?: boolean
    categoria?: boolean
    activo?: boolean
    creado_en?: boolean
    servicio_id?: boolean
    servicio?: boolean | Imagen$servicioArgs<ExtArgs>
  }, ExtArgs["result"]["imagen"]>

  export type ImagenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    public_id?: boolean
    url_base?: boolean
    etiquetas?: boolean
    categoria?: boolean
    activo?: boolean
    creado_en?: boolean
    servicio_id?: boolean
    servicio?: boolean | Imagen$servicioArgs<ExtArgs>
  }, ExtArgs["result"]["imagen"]>

  export type ImagenSelectScalar = {
    id?: boolean
    titulo?: boolean
    public_id?: boolean
    url_base?: boolean
    etiquetas?: boolean
    categoria?: boolean
    activo?: boolean
    creado_en?: boolean
    servicio_id?: boolean
  }

  export type ImagenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | Imagen$servicioArgs<ExtArgs>
  }
  export type ImagenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicio?: boolean | Imagen$servicioArgs<ExtArgs>
  }

  export type $ImagenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Imagen"
    objects: {
      servicio: Prisma.$ServicioBasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      public_id: string
      url_base: string
      etiquetas: string
      categoria: string
      activo: boolean
      creado_en: Date
      servicio_id: string | null
    }, ExtArgs["result"]["imagen"]>
    composites: {}
  }

  type ImagenGetPayload<S extends boolean | null | undefined | ImagenDefaultArgs> = $Result.GetResult<Prisma.$ImagenPayload, S>

  type ImagenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ImagenFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImagenCountAggregateInputType | true
    }

  export interface ImagenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Imagen'], meta: { name: 'Imagen' } }
    /**
     * Find zero or one Imagen that matches the filter.
     * @param {ImagenFindUniqueArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagenFindUniqueArgs>(args: SelectSubset<T, ImagenFindUniqueArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Imagen that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ImagenFindUniqueOrThrowArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagenFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Imagen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenFindFirstArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagenFindFirstArgs>(args?: SelectSubset<T, ImagenFindFirstArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Imagen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenFindFirstOrThrowArgs} args - Arguments to find a Imagen
     * @example
     * // Get one Imagen
     * const imagen = await prisma.imagen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagenFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Imagens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imagens
     * const imagens = await prisma.imagen.findMany()
     * 
     * // Get first 10 Imagens
     * const imagens = await prisma.imagen.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagenWithIdOnly = await prisma.imagen.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagenFindManyArgs>(args?: SelectSubset<T, ImagenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Imagen.
     * @param {ImagenCreateArgs} args - Arguments to create a Imagen.
     * @example
     * // Create one Imagen
     * const Imagen = await prisma.imagen.create({
     *   data: {
     *     // ... data to create a Imagen
     *   }
     * })
     * 
     */
    create<T extends ImagenCreateArgs>(args: SelectSubset<T, ImagenCreateArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Imagens.
     * @param {ImagenCreateManyArgs} args - Arguments to create many Imagens.
     * @example
     * // Create many Imagens
     * const imagen = await prisma.imagen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagenCreateManyArgs>(args?: SelectSubset<T, ImagenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Imagens and returns the data saved in the database.
     * @param {ImagenCreateManyAndReturnArgs} args - Arguments to create many Imagens.
     * @example
     * // Create many Imagens
     * const imagen = await prisma.imagen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Imagens and only return the `id`
     * const imagenWithIdOnly = await prisma.imagen.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagenCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Imagen.
     * @param {ImagenDeleteArgs} args - Arguments to delete one Imagen.
     * @example
     * // Delete one Imagen
     * const Imagen = await prisma.imagen.delete({
     *   where: {
     *     // ... filter to delete one Imagen
     *   }
     * })
     * 
     */
    delete<T extends ImagenDeleteArgs>(args: SelectSubset<T, ImagenDeleteArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Imagen.
     * @param {ImagenUpdateArgs} args - Arguments to update one Imagen.
     * @example
     * // Update one Imagen
     * const imagen = await prisma.imagen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagenUpdateArgs>(args: SelectSubset<T, ImagenUpdateArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Imagens.
     * @param {ImagenDeleteManyArgs} args - Arguments to filter Imagens to delete.
     * @example
     * // Delete a few Imagens
     * const { count } = await prisma.imagen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagenDeleteManyArgs>(args?: SelectSubset<T, ImagenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imagens
     * const imagen = await prisma.imagen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagenUpdateManyArgs>(args: SelectSubset<T, ImagenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Imagen.
     * @param {ImagenUpsertArgs} args - Arguments to update or create a Imagen.
     * @example
     * // Update or create a Imagen
     * const imagen = await prisma.imagen.upsert({
     *   create: {
     *     // ... data to create a Imagen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imagen we want to update
     *   }
     * })
     */
    upsert<T extends ImagenUpsertArgs>(args: SelectSubset<T, ImagenUpsertArgs<ExtArgs>>): Prisma__ImagenClient<$Result.GetResult<Prisma.$ImagenPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Imagens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenCountArgs} args - Arguments to filter Imagens to count.
     * @example
     * // Count the number of Imagens
     * const count = await prisma.imagen.count({
     *   where: {
     *     // ... the filter for the Imagens we want to count
     *   }
     * })
    **/
    count<T extends ImagenCountArgs>(
      args?: Subset<T, ImagenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imagen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagenAggregateArgs>(args: Subset<T, ImagenAggregateArgs>): Prisma.PrismaPromise<GetImagenAggregateType<T>>

    /**
     * Group by Imagen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagenGroupByArgs['orderBy'] }
        : { orderBy?: ImagenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Imagen model
   */
  readonly fields: ImagenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imagen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servicio<T extends Imagen$servicioArgs<ExtArgs> = {}>(args?: Subset<T, Imagen$servicioArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Imagen model
   */ 
  interface ImagenFieldRefs {
    readonly id: FieldRef<"Imagen", 'String'>
    readonly titulo: FieldRef<"Imagen", 'String'>
    readonly public_id: FieldRef<"Imagen", 'String'>
    readonly url_base: FieldRef<"Imagen", 'String'>
    readonly etiquetas: FieldRef<"Imagen", 'String'>
    readonly categoria: FieldRef<"Imagen", 'String'>
    readonly activo: FieldRef<"Imagen", 'Boolean'>
    readonly creado_en: FieldRef<"Imagen", 'DateTime'>
    readonly servicio_id: FieldRef<"Imagen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Imagen findUnique
   */
  export type ImagenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagen to fetch.
     */
    where: ImagenWhereUniqueInput
  }

  /**
   * Imagen findUniqueOrThrow
   */
  export type ImagenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagen to fetch.
     */
    where: ImagenWhereUniqueInput
  }

  /**
   * Imagen findFirst
   */
  export type ImagenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagen to fetch.
     */
    where?: ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagens to fetch.
     */
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagens.
     */
    cursor?: ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagens.
     */
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * Imagen findFirstOrThrow
   */
  export type ImagenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagen to fetch.
     */
    where?: ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagens to fetch.
     */
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imagens.
     */
    cursor?: ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imagens.
     */
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * Imagen findMany
   */
  export type ImagenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter, which Imagens to fetch.
     */
    where?: ImagenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imagens to fetch.
     */
    orderBy?: ImagenOrderByWithRelationInput | ImagenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imagens.
     */
    cursor?: ImagenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imagens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imagens.
     */
    skip?: number
    distinct?: ImagenScalarFieldEnum | ImagenScalarFieldEnum[]
  }

  /**
   * Imagen create
   */
  export type ImagenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * The data needed to create a Imagen.
     */
    data: XOR<ImagenCreateInput, ImagenUncheckedCreateInput>
  }

  /**
   * Imagen createMany
   */
  export type ImagenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Imagens.
     */
    data: ImagenCreateManyInput | ImagenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Imagen createManyAndReturn
   */
  export type ImagenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Imagens.
     */
    data: ImagenCreateManyInput | ImagenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Imagen update
   */
  export type ImagenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * The data needed to update a Imagen.
     */
    data: XOR<ImagenUpdateInput, ImagenUncheckedUpdateInput>
    /**
     * Choose, which Imagen to update.
     */
    where: ImagenWhereUniqueInput
  }

  /**
   * Imagen updateMany
   */
  export type ImagenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Imagens.
     */
    data: XOR<ImagenUpdateManyMutationInput, ImagenUncheckedUpdateManyInput>
    /**
     * Filter which Imagens to update
     */
    where?: ImagenWhereInput
  }

  /**
   * Imagen upsert
   */
  export type ImagenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * The filter to search for the Imagen to update in case it exists.
     */
    where: ImagenWhereUniqueInput
    /**
     * In case the Imagen found by the `where` argument doesn't exist, create a new Imagen with this data.
     */
    create: XOR<ImagenCreateInput, ImagenUncheckedCreateInput>
    /**
     * In case the Imagen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagenUpdateInput, ImagenUncheckedUpdateInput>
  }

  /**
   * Imagen delete
   */
  export type ImagenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
    /**
     * Filter which Imagen to delete.
     */
    where: ImagenWhereUniqueInput
  }

  /**
   * Imagen deleteMany
   */
  export type ImagenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Imagens to delete
     */
    where?: ImagenWhereInput
  }

  /**
   * Imagen.servicio
   */
  export type Imagen$servicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioBase
     */
    select?: ServicioBaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioBaseInclude<ExtArgs> | null
    where?: ServicioBaseWhereInput
  }

  /**
   * Imagen without action
   */
  export type ImagenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Imagen
     */
    select?: ImagenSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagenInclude<ExtArgs> | null
  }


  /**
   * Model Partido
   */

  export type AggregatePartido = {
    _count: PartidoCountAggregateOutputType | null
    _min: PartidoMinAggregateOutputType | null
    _max: PartidoMaxAggregateOutputType | null
  }

  export type PartidoMinAggregateOutputType = {
    id: string | null
    fecha: Date | null
    hora: string | null
    equipo_local: string | null
    equipo_visita: string | null
    logo_local: string | null
    logo_visita: string | null
    canal: string | null
    liga: string | null
    requiere_iptv: boolean | null
    push_enviado: boolean | null
    activo: boolean | null
  }

  export type PartidoMaxAggregateOutputType = {
    id: string | null
    fecha: Date | null
    hora: string | null
    equipo_local: string | null
    equipo_visita: string | null
    logo_local: string | null
    logo_visita: string | null
    canal: string | null
    liga: string | null
    requiere_iptv: boolean | null
    push_enviado: boolean | null
    activo: boolean | null
  }

  export type PartidoCountAggregateOutputType = {
    id: number
    fecha: number
    hora: number
    equipo_local: number
    equipo_visita: number
    logo_local: number
    logo_visita: number
    canal: number
    liga: number
    requiere_iptv: number
    push_enviado: number
    activo: number
    _all: number
  }


  export type PartidoMinAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    equipo_local?: true
    equipo_visita?: true
    logo_local?: true
    logo_visita?: true
    canal?: true
    liga?: true
    requiere_iptv?: true
    push_enviado?: true
    activo?: true
  }

  export type PartidoMaxAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    equipo_local?: true
    equipo_visita?: true
    logo_local?: true
    logo_visita?: true
    canal?: true
    liga?: true
    requiere_iptv?: true
    push_enviado?: true
    activo?: true
  }

  export type PartidoCountAggregateInputType = {
    id?: true
    fecha?: true
    hora?: true
    equipo_local?: true
    equipo_visita?: true
    logo_local?: true
    logo_visita?: true
    canal?: true
    liga?: true
    requiere_iptv?: true
    push_enviado?: true
    activo?: true
    _all?: true
  }

  export type PartidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partido to aggregate.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partidos
    **/
    _count?: true | PartidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartidoMaxAggregateInputType
  }

  export type GetPartidoAggregateType<T extends PartidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePartido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartido[P]>
      : GetScalarType<T[P], AggregatePartido[P]>
  }




  export type PartidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidoWhereInput
    orderBy?: PartidoOrderByWithAggregationInput | PartidoOrderByWithAggregationInput[]
    by: PartidoScalarFieldEnum[] | PartidoScalarFieldEnum
    having?: PartidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartidoCountAggregateInputType | true
    _min?: PartidoMinAggregateInputType
    _max?: PartidoMaxAggregateInputType
  }

  export type PartidoGroupByOutputType = {
    id: string
    fecha: Date
    hora: string
    equipo_local: string
    equipo_visita: string
    logo_local: string | null
    logo_visita: string | null
    canal: string
    liga: string | null
    requiere_iptv: boolean
    push_enviado: boolean
    activo: boolean
    _count: PartidoCountAggregateOutputType | null
    _min: PartidoMinAggregateOutputType | null
    _max: PartidoMaxAggregateOutputType | null
  }

  type GetPartidoGroupByPayload<T extends PartidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartidoGroupByOutputType[P]>
            : GetScalarType<T[P], PartidoGroupByOutputType[P]>
        }
      >
    >


  export type PartidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    hora?: boolean
    equipo_local?: boolean
    equipo_visita?: boolean
    logo_local?: boolean
    logo_visita?: boolean
    canal?: boolean
    liga?: boolean
    requiere_iptv?: boolean
    push_enviado?: boolean
    activo?: boolean
  }, ExtArgs["result"]["partido"]>

  export type PartidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    hora?: boolean
    equipo_local?: boolean
    equipo_visita?: boolean
    logo_local?: boolean
    logo_visita?: boolean
    canal?: boolean
    liga?: boolean
    requiere_iptv?: boolean
    push_enviado?: boolean
    activo?: boolean
  }, ExtArgs["result"]["partido"]>

  export type PartidoSelectScalar = {
    id?: boolean
    fecha?: boolean
    hora?: boolean
    equipo_local?: boolean
    equipo_visita?: boolean
    logo_local?: boolean
    logo_visita?: boolean
    canal?: boolean
    liga?: boolean
    requiere_iptv?: boolean
    push_enviado?: boolean
    activo?: boolean
  }


  export type $PartidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partido"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fecha: Date
      hora: string
      equipo_local: string
      equipo_visita: string
      logo_local: string | null
      logo_visita: string | null
      canal: string
      liga: string | null
      requiere_iptv: boolean
      push_enviado: boolean
      activo: boolean
    }, ExtArgs["result"]["partido"]>
    composites: {}
  }

  type PartidoGetPayload<S extends boolean | null | undefined | PartidoDefaultArgs> = $Result.GetResult<Prisma.$PartidoPayload, S>

  type PartidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PartidoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PartidoCountAggregateInputType | true
    }

  export interface PartidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partido'], meta: { name: 'Partido' } }
    /**
     * Find zero or one Partido that matches the filter.
     * @param {PartidoFindUniqueArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartidoFindUniqueArgs>(args: SelectSubset<T, PartidoFindUniqueArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Partido that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PartidoFindUniqueOrThrowArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PartidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Partido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoFindFirstArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartidoFindFirstArgs>(args?: SelectSubset<T, PartidoFindFirstArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Partido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoFindFirstOrThrowArgs} args - Arguments to find a Partido
     * @example
     * // Get one Partido
     * const partido = await prisma.partido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PartidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Partidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partidos
     * const partidos = await prisma.partido.findMany()
     * 
     * // Get first 10 Partidos
     * const partidos = await prisma.partido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partidoWithIdOnly = await prisma.partido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartidoFindManyArgs>(args?: SelectSubset<T, PartidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Partido.
     * @param {PartidoCreateArgs} args - Arguments to create a Partido.
     * @example
     * // Create one Partido
     * const Partido = await prisma.partido.create({
     *   data: {
     *     // ... data to create a Partido
     *   }
     * })
     * 
     */
    create<T extends PartidoCreateArgs>(args: SelectSubset<T, PartidoCreateArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Partidos.
     * @param {PartidoCreateManyArgs} args - Arguments to create many Partidos.
     * @example
     * // Create many Partidos
     * const partido = await prisma.partido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartidoCreateManyArgs>(args?: SelectSubset<T, PartidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partidos and returns the data saved in the database.
     * @param {PartidoCreateManyAndReturnArgs} args - Arguments to create many Partidos.
     * @example
     * // Create many Partidos
     * const partido = await prisma.partido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partidos and only return the `id`
     * const partidoWithIdOnly = await prisma.partido.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PartidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Partido.
     * @param {PartidoDeleteArgs} args - Arguments to delete one Partido.
     * @example
     * // Delete one Partido
     * const Partido = await prisma.partido.delete({
     *   where: {
     *     // ... filter to delete one Partido
     *   }
     * })
     * 
     */
    delete<T extends PartidoDeleteArgs>(args: SelectSubset<T, PartidoDeleteArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Partido.
     * @param {PartidoUpdateArgs} args - Arguments to update one Partido.
     * @example
     * // Update one Partido
     * const partido = await prisma.partido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartidoUpdateArgs>(args: SelectSubset<T, PartidoUpdateArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Partidos.
     * @param {PartidoDeleteManyArgs} args - Arguments to filter Partidos to delete.
     * @example
     * // Delete a few Partidos
     * const { count } = await prisma.partido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartidoDeleteManyArgs>(args?: SelectSubset<T, PartidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partidos
     * const partido = await prisma.partido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartidoUpdateManyArgs>(args: SelectSubset<T, PartidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Partido.
     * @param {PartidoUpsertArgs} args - Arguments to update or create a Partido.
     * @example
     * // Update or create a Partido
     * const partido = await prisma.partido.upsert({
     *   create: {
     *     // ... data to create a Partido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partido we want to update
     *   }
     * })
     */
    upsert<T extends PartidoUpsertArgs>(args: SelectSubset<T, PartidoUpsertArgs<ExtArgs>>): Prisma__PartidoClient<$Result.GetResult<Prisma.$PartidoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Partidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoCountArgs} args - Arguments to filter Partidos to count.
     * @example
     * // Count the number of Partidos
     * const count = await prisma.partido.count({
     *   where: {
     *     // ... the filter for the Partidos we want to count
     *   }
     * })
    **/
    count<T extends PartidoCountArgs>(
      args?: Subset<T, PartidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartidoAggregateArgs>(args: Subset<T, PartidoAggregateArgs>): Prisma.PrismaPromise<GetPartidoAggregateType<T>>

    /**
     * Group by Partido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartidoGroupByArgs['orderBy'] }
        : { orderBy?: PartidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partido model
   */
  readonly fields: PartidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partido model
   */ 
  interface PartidoFieldRefs {
    readonly id: FieldRef<"Partido", 'String'>
    readonly fecha: FieldRef<"Partido", 'DateTime'>
    readonly hora: FieldRef<"Partido", 'String'>
    readonly equipo_local: FieldRef<"Partido", 'String'>
    readonly equipo_visita: FieldRef<"Partido", 'String'>
    readonly logo_local: FieldRef<"Partido", 'String'>
    readonly logo_visita: FieldRef<"Partido", 'String'>
    readonly canal: FieldRef<"Partido", 'String'>
    readonly liga: FieldRef<"Partido", 'String'>
    readonly requiere_iptv: FieldRef<"Partido", 'Boolean'>
    readonly push_enviado: FieldRef<"Partido", 'Boolean'>
    readonly activo: FieldRef<"Partido", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Partido findUnique
   */
  export type PartidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where: PartidoWhereUniqueInput
  }

  /**
   * Partido findUniqueOrThrow
   */
  export type PartidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where: PartidoWhereUniqueInput
  }

  /**
   * Partido findFirst
   */
  export type PartidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidos.
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidos.
     */
    distinct?: PartidoScalarFieldEnum | PartidoScalarFieldEnum[]
  }

  /**
   * Partido findFirstOrThrow
   */
  export type PartidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Filter, which Partido to fetch.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidos.
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidos.
     */
    distinct?: PartidoScalarFieldEnum | PartidoScalarFieldEnum[]
  }

  /**
   * Partido findMany
   */
  export type PartidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Filter, which Partidos to fetch.
     */
    where?: PartidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidos to fetch.
     */
    orderBy?: PartidoOrderByWithRelationInput | PartidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partidos.
     */
    cursor?: PartidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidos.
     */
    skip?: number
    distinct?: PartidoScalarFieldEnum | PartidoScalarFieldEnum[]
  }

  /**
   * Partido create
   */
  export type PartidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * The data needed to create a Partido.
     */
    data: XOR<PartidoCreateInput, PartidoUncheckedCreateInput>
  }

  /**
   * Partido createMany
   */
  export type PartidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partidos.
     */
    data: PartidoCreateManyInput | PartidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partido createManyAndReturn
   */
  export type PartidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Partidos.
     */
    data: PartidoCreateManyInput | PartidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partido update
   */
  export type PartidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * The data needed to update a Partido.
     */
    data: XOR<PartidoUpdateInput, PartidoUncheckedUpdateInput>
    /**
     * Choose, which Partido to update.
     */
    where: PartidoWhereUniqueInput
  }

  /**
   * Partido updateMany
   */
  export type PartidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partidos.
     */
    data: XOR<PartidoUpdateManyMutationInput, PartidoUncheckedUpdateManyInput>
    /**
     * Filter which Partidos to update
     */
    where?: PartidoWhereInput
  }

  /**
   * Partido upsert
   */
  export type PartidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * The filter to search for the Partido to update in case it exists.
     */
    where: PartidoWhereUniqueInput
    /**
     * In case the Partido found by the `where` argument doesn't exist, create a new Partido with this data.
     */
    create: XOR<PartidoCreateInput, PartidoUncheckedCreateInput>
    /**
     * In case the Partido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartidoUpdateInput, PartidoUncheckedUpdateInput>
  }

  /**
   * Partido delete
   */
  export type PartidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
    /**
     * Filter which Partido to delete.
     */
    where: PartidoWhereUniqueInput
  }

  /**
   * Partido deleteMany
   */
  export type PartidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partidos to delete
     */
    where?: PartidoWhereInput
  }

  /**
   * Partido without action
   */
  export type PartidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partido
     */
    select?: PartidoSelect<ExtArgs> | null
  }


  /**
   * Model MensajeRapido
   */

  export type AggregateMensajeRapido = {
    _count: MensajeRapidoCountAggregateOutputType | null
    _avg: MensajeRapidoAvgAggregateOutputType | null
    _sum: MensajeRapidoSumAggregateOutputType | null
    _min: MensajeRapidoMinAggregateOutputType | null
    _max: MensajeRapidoMaxAggregateOutputType | null
  }

  export type MensajeRapidoAvgAggregateOutputType = {
    orden: number | null
  }

  export type MensajeRapidoSumAggregateOutputType = {
    orden: number | null
  }

  export type MensajeRapidoMinAggregateOutputType = {
    id: string | null
    titulo: string | null
    template: string | null
    orden: number | null
    activo: boolean | null
  }

  export type MensajeRapidoMaxAggregateOutputType = {
    id: string | null
    titulo: string | null
    template: string | null
    orden: number | null
    activo: boolean | null
  }

  export type MensajeRapidoCountAggregateOutputType = {
    id: number
    titulo: number
    template: number
    orden: number
    activo: number
    _all: number
  }


  export type MensajeRapidoAvgAggregateInputType = {
    orden?: true
  }

  export type MensajeRapidoSumAggregateInputType = {
    orden?: true
  }

  export type MensajeRapidoMinAggregateInputType = {
    id?: true
    titulo?: true
    template?: true
    orden?: true
    activo?: true
  }

  export type MensajeRapidoMaxAggregateInputType = {
    id?: true
    titulo?: true
    template?: true
    orden?: true
    activo?: true
  }

  export type MensajeRapidoCountAggregateInputType = {
    id?: true
    titulo?: true
    template?: true
    orden?: true
    activo?: true
    _all?: true
  }

  export type MensajeRapidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensajeRapido to aggregate.
     */
    where?: MensajeRapidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensajeRapidos to fetch.
     */
    orderBy?: MensajeRapidoOrderByWithRelationInput | MensajeRapidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MensajeRapidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensajeRapidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensajeRapidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MensajeRapidos
    **/
    _count?: true | MensajeRapidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MensajeRapidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MensajeRapidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MensajeRapidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MensajeRapidoMaxAggregateInputType
  }

  export type GetMensajeRapidoAggregateType<T extends MensajeRapidoAggregateArgs> = {
        [P in keyof T & keyof AggregateMensajeRapido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMensajeRapido[P]>
      : GetScalarType<T[P], AggregateMensajeRapido[P]>
  }




  export type MensajeRapidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MensajeRapidoWhereInput
    orderBy?: MensajeRapidoOrderByWithAggregationInput | MensajeRapidoOrderByWithAggregationInput[]
    by: MensajeRapidoScalarFieldEnum[] | MensajeRapidoScalarFieldEnum
    having?: MensajeRapidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MensajeRapidoCountAggregateInputType | true
    _avg?: MensajeRapidoAvgAggregateInputType
    _sum?: MensajeRapidoSumAggregateInputType
    _min?: MensajeRapidoMinAggregateInputType
    _max?: MensajeRapidoMaxAggregateInputType
  }

  export type MensajeRapidoGroupByOutputType = {
    id: string
    titulo: string
    template: string
    orden: number
    activo: boolean
    _count: MensajeRapidoCountAggregateOutputType | null
    _avg: MensajeRapidoAvgAggregateOutputType | null
    _sum: MensajeRapidoSumAggregateOutputType | null
    _min: MensajeRapidoMinAggregateOutputType | null
    _max: MensajeRapidoMaxAggregateOutputType | null
  }

  type GetMensajeRapidoGroupByPayload<T extends MensajeRapidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MensajeRapidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MensajeRapidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MensajeRapidoGroupByOutputType[P]>
            : GetScalarType<T[P], MensajeRapidoGroupByOutputType[P]>
        }
      >
    >


  export type MensajeRapidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    template?: boolean
    orden?: boolean
    activo?: boolean
  }, ExtArgs["result"]["mensajeRapido"]>

  export type MensajeRapidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    template?: boolean
    orden?: boolean
    activo?: boolean
  }, ExtArgs["result"]["mensajeRapido"]>

  export type MensajeRapidoSelectScalar = {
    id?: boolean
    titulo?: boolean
    template?: boolean
    orden?: boolean
    activo?: boolean
  }


  export type $MensajeRapidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MensajeRapido"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      titulo: string
      template: string
      orden: number
      activo: boolean
    }, ExtArgs["result"]["mensajeRapido"]>
    composites: {}
  }

  type MensajeRapidoGetPayload<S extends boolean | null | undefined | MensajeRapidoDefaultArgs> = $Result.GetResult<Prisma.$MensajeRapidoPayload, S>

  type MensajeRapidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MensajeRapidoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MensajeRapidoCountAggregateInputType | true
    }

  export interface MensajeRapidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MensajeRapido'], meta: { name: 'MensajeRapido' } }
    /**
     * Find zero or one MensajeRapido that matches the filter.
     * @param {MensajeRapidoFindUniqueArgs} args - Arguments to find a MensajeRapido
     * @example
     * // Get one MensajeRapido
     * const mensajeRapido = await prisma.mensajeRapido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MensajeRapidoFindUniqueArgs>(args: SelectSubset<T, MensajeRapidoFindUniqueArgs<ExtArgs>>): Prisma__MensajeRapidoClient<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MensajeRapido that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MensajeRapidoFindUniqueOrThrowArgs} args - Arguments to find a MensajeRapido
     * @example
     * // Get one MensajeRapido
     * const mensajeRapido = await prisma.mensajeRapido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MensajeRapidoFindUniqueOrThrowArgs>(args: SelectSubset<T, MensajeRapidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MensajeRapidoClient<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MensajeRapido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeRapidoFindFirstArgs} args - Arguments to find a MensajeRapido
     * @example
     * // Get one MensajeRapido
     * const mensajeRapido = await prisma.mensajeRapido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MensajeRapidoFindFirstArgs>(args?: SelectSubset<T, MensajeRapidoFindFirstArgs<ExtArgs>>): Prisma__MensajeRapidoClient<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MensajeRapido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeRapidoFindFirstOrThrowArgs} args - Arguments to find a MensajeRapido
     * @example
     * // Get one MensajeRapido
     * const mensajeRapido = await prisma.mensajeRapido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MensajeRapidoFindFirstOrThrowArgs>(args?: SelectSubset<T, MensajeRapidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MensajeRapidoClient<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MensajeRapidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeRapidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MensajeRapidos
     * const mensajeRapidos = await prisma.mensajeRapido.findMany()
     * 
     * // Get first 10 MensajeRapidos
     * const mensajeRapidos = await prisma.mensajeRapido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mensajeRapidoWithIdOnly = await prisma.mensajeRapido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MensajeRapidoFindManyArgs>(args?: SelectSubset<T, MensajeRapidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MensajeRapido.
     * @param {MensajeRapidoCreateArgs} args - Arguments to create a MensajeRapido.
     * @example
     * // Create one MensajeRapido
     * const MensajeRapido = await prisma.mensajeRapido.create({
     *   data: {
     *     // ... data to create a MensajeRapido
     *   }
     * })
     * 
     */
    create<T extends MensajeRapidoCreateArgs>(args: SelectSubset<T, MensajeRapidoCreateArgs<ExtArgs>>): Prisma__MensajeRapidoClient<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MensajeRapidos.
     * @param {MensajeRapidoCreateManyArgs} args - Arguments to create many MensajeRapidos.
     * @example
     * // Create many MensajeRapidos
     * const mensajeRapido = await prisma.mensajeRapido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MensajeRapidoCreateManyArgs>(args?: SelectSubset<T, MensajeRapidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MensajeRapidos and returns the data saved in the database.
     * @param {MensajeRapidoCreateManyAndReturnArgs} args - Arguments to create many MensajeRapidos.
     * @example
     * // Create many MensajeRapidos
     * const mensajeRapido = await prisma.mensajeRapido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MensajeRapidos and only return the `id`
     * const mensajeRapidoWithIdOnly = await prisma.mensajeRapido.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MensajeRapidoCreateManyAndReturnArgs>(args?: SelectSubset<T, MensajeRapidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MensajeRapido.
     * @param {MensajeRapidoDeleteArgs} args - Arguments to delete one MensajeRapido.
     * @example
     * // Delete one MensajeRapido
     * const MensajeRapido = await prisma.mensajeRapido.delete({
     *   where: {
     *     // ... filter to delete one MensajeRapido
     *   }
     * })
     * 
     */
    delete<T extends MensajeRapidoDeleteArgs>(args: SelectSubset<T, MensajeRapidoDeleteArgs<ExtArgs>>): Prisma__MensajeRapidoClient<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MensajeRapido.
     * @param {MensajeRapidoUpdateArgs} args - Arguments to update one MensajeRapido.
     * @example
     * // Update one MensajeRapido
     * const mensajeRapido = await prisma.mensajeRapido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MensajeRapidoUpdateArgs>(args: SelectSubset<T, MensajeRapidoUpdateArgs<ExtArgs>>): Prisma__MensajeRapidoClient<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MensajeRapidos.
     * @param {MensajeRapidoDeleteManyArgs} args - Arguments to filter MensajeRapidos to delete.
     * @example
     * // Delete a few MensajeRapidos
     * const { count } = await prisma.mensajeRapido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MensajeRapidoDeleteManyArgs>(args?: SelectSubset<T, MensajeRapidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MensajeRapidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeRapidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MensajeRapidos
     * const mensajeRapido = await prisma.mensajeRapido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MensajeRapidoUpdateManyArgs>(args: SelectSubset<T, MensajeRapidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MensajeRapido.
     * @param {MensajeRapidoUpsertArgs} args - Arguments to update or create a MensajeRapido.
     * @example
     * // Update or create a MensajeRapido
     * const mensajeRapido = await prisma.mensajeRapido.upsert({
     *   create: {
     *     // ... data to create a MensajeRapido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MensajeRapido we want to update
     *   }
     * })
     */
    upsert<T extends MensajeRapidoUpsertArgs>(args: SelectSubset<T, MensajeRapidoUpsertArgs<ExtArgs>>): Prisma__MensajeRapidoClient<$Result.GetResult<Prisma.$MensajeRapidoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MensajeRapidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeRapidoCountArgs} args - Arguments to filter MensajeRapidos to count.
     * @example
     * // Count the number of MensajeRapidos
     * const count = await prisma.mensajeRapido.count({
     *   where: {
     *     // ... the filter for the MensajeRapidos we want to count
     *   }
     * })
    **/
    count<T extends MensajeRapidoCountArgs>(
      args?: Subset<T, MensajeRapidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MensajeRapidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MensajeRapido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeRapidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MensajeRapidoAggregateArgs>(args: Subset<T, MensajeRapidoAggregateArgs>): Prisma.PrismaPromise<GetMensajeRapidoAggregateType<T>>

    /**
     * Group by MensajeRapido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MensajeRapidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MensajeRapidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MensajeRapidoGroupByArgs['orderBy'] }
        : { orderBy?: MensajeRapidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MensajeRapidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensajeRapidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MensajeRapido model
   */
  readonly fields: MensajeRapidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MensajeRapido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MensajeRapidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MensajeRapido model
   */ 
  interface MensajeRapidoFieldRefs {
    readonly id: FieldRef<"MensajeRapido", 'String'>
    readonly titulo: FieldRef<"MensajeRapido", 'String'>
    readonly template: FieldRef<"MensajeRapido", 'String'>
    readonly orden: FieldRef<"MensajeRapido", 'Int'>
    readonly activo: FieldRef<"MensajeRapido", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MensajeRapido findUnique
   */
  export type MensajeRapidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
    /**
     * Filter, which MensajeRapido to fetch.
     */
    where: MensajeRapidoWhereUniqueInput
  }

  /**
   * MensajeRapido findUniqueOrThrow
   */
  export type MensajeRapidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
    /**
     * Filter, which MensajeRapido to fetch.
     */
    where: MensajeRapidoWhereUniqueInput
  }

  /**
   * MensajeRapido findFirst
   */
  export type MensajeRapidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
    /**
     * Filter, which MensajeRapido to fetch.
     */
    where?: MensajeRapidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensajeRapidos to fetch.
     */
    orderBy?: MensajeRapidoOrderByWithRelationInput | MensajeRapidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensajeRapidos.
     */
    cursor?: MensajeRapidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensajeRapidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensajeRapidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensajeRapidos.
     */
    distinct?: MensajeRapidoScalarFieldEnum | MensajeRapidoScalarFieldEnum[]
  }

  /**
   * MensajeRapido findFirstOrThrow
   */
  export type MensajeRapidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
    /**
     * Filter, which MensajeRapido to fetch.
     */
    where?: MensajeRapidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensajeRapidos to fetch.
     */
    orderBy?: MensajeRapidoOrderByWithRelationInput | MensajeRapidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MensajeRapidos.
     */
    cursor?: MensajeRapidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensajeRapidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensajeRapidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MensajeRapidos.
     */
    distinct?: MensajeRapidoScalarFieldEnum | MensajeRapidoScalarFieldEnum[]
  }

  /**
   * MensajeRapido findMany
   */
  export type MensajeRapidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
    /**
     * Filter, which MensajeRapidos to fetch.
     */
    where?: MensajeRapidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MensajeRapidos to fetch.
     */
    orderBy?: MensajeRapidoOrderByWithRelationInput | MensajeRapidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MensajeRapidos.
     */
    cursor?: MensajeRapidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MensajeRapidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MensajeRapidos.
     */
    skip?: number
    distinct?: MensajeRapidoScalarFieldEnum | MensajeRapidoScalarFieldEnum[]
  }

  /**
   * MensajeRapido create
   */
  export type MensajeRapidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
    /**
     * The data needed to create a MensajeRapido.
     */
    data: XOR<MensajeRapidoCreateInput, MensajeRapidoUncheckedCreateInput>
  }

  /**
   * MensajeRapido createMany
   */
  export type MensajeRapidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MensajeRapidos.
     */
    data: MensajeRapidoCreateManyInput | MensajeRapidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MensajeRapido createManyAndReturn
   */
  export type MensajeRapidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MensajeRapidos.
     */
    data: MensajeRapidoCreateManyInput | MensajeRapidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MensajeRapido update
   */
  export type MensajeRapidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
    /**
     * The data needed to update a MensajeRapido.
     */
    data: XOR<MensajeRapidoUpdateInput, MensajeRapidoUncheckedUpdateInput>
    /**
     * Choose, which MensajeRapido to update.
     */
    where: MensajeRapidoWhereUniqueInput
  }

  /**
   * MensajeRapido updateMany
   */
  export type MensajeRapidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MensajeRapidos.
     */
    data: XOR<MensajeRapidoUpdateManyMutationInput, MensajeRapidoUncheckedUpdateManyInput>
    /**
     * Filter which MensajeRapidos to update
     */
    where?: MensajeRapidoWhereInput
  }

  /**
   * MensajeRapido upsert
   */
  export type MensajeRapidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
    /**
     * The filter to search for the MensajeRapido to update in case it exists.
     */
    where: MensajeRapidoWhereUniqueInput
    /**
     * In case the MensajeRapido found by the `where` argument doesn't exist, create a new MensajeRapido with this data.
     */
    create: XOR<MensajeRapidoCreateInput, MensajeRapidoUncheckedCreateInput>
    /**
     * In case the MensajeRapido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MensajeRapidoUpdateInput, MensajeRapidoUncheckedUpdateInput>
  }

  /**
   * MensajeRapido delete
   */
  export type MensajeRapidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
    /**
     * Filter which MensajeRapido to delete.
     */
    where: MensajeRapidoWhereUniqueInput
  }

  /**
   * MensajeRapido deleteMany
   */
  export type MensajeRapidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MensajeRapidos to delete
     */
    where?: MensajeRapidoWhereInput
  }

  /**
   * MensajeRapido without action
   */
  export type MensajeRapidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MensajeRapido
     */
    select?: MensajeRapidoSelect<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoMinAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    servicio_id: string | null
    notas: string | null
    status: string | null
    creado_en: Date | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    servicio_id: string | null
    notas: string | null
    status: string | null
    creado_en: Date | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    vendor_id: number
    servicio_id: number
    notas: number
    status: number
    creado_en: number
    _all: number
  }


  export type PedidoMinAggregateInputType = {
    id?: true
    vendor_id?: true
    servicio_id?: true
    notas?: true
    status?: true
    creado_en?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    vendor_id?: true
    servicio_id?: true
    notas?: true
    status?: true
    creado_en?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    vendor_id?: true
    servicio_id?: true
    notas?: true
    status?: true
    creado_en?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: string
    vendor_id: string
    servicio_id: string
    notas: string | null
    status: string
    creado_en: Date
    _count: PedidoCountAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor_id?: boolean
    servicio_id?: boolean
    notas?: boolean
    status?: boolean
    creado_en?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor_id?: boolean
    servicio_id?: boolean
    notas?: boolean
    status?: boolean
    creado_en?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    vendor_id?: boolean
    servicio_id?: boolean
    notas?: boolean
    status?: boolean
    creado_en?: boolean
  }

  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendor_id: string
      servicio_id: string
      notas: string | null
      status: string
      creado_en: Date
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */ 
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'String'>
    readonly vendor_id: FieldRef<"Pedido", 'String'>
    readonly servicio_id: FieldRef<"Pedido", 'String'>
    readonly notas: FieldRef<"Pedido", 'String'>
    readonly status: FieldRef<"Pedido", 'String'>
    readonly creado_en: FieldRef<"Pedido", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model Pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    monto: number | null
  }

  export type PagoSumAggregateOutputType = {
    monto: number | null
  }

  export type PagoMinAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    monto: number | null
    plan_id: string | null
    comprobante_url: string | null
    status: string | null
    confirmado_en: Date | null
    notas_admin: string | null
    creado_en: Date | null
  }

  export type PagoMaxAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    monto: number | null
    plan_id: string | null
    comprobante_url: string | null
    status: string | null
    confirmado_en: Date | null
    notas_admin: string | null
    creado_en: Date | null
  }

  export type PagoCountAggregateOutputType = {
    id: number
    vendor_id: number
    monto: number
    plan_id: number
    comprobante_url: number
    status: number
    confirmado_en: number
    notas_admin: number
    creado_en: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    monto?: true
  }

  export type PagoSumAggregateInputType = {
    monto?: true
  }

  export type PagoMinAggregateInputType = {
    id?: true
    vendor_id?: true
    monto?: true
    plan_id?: true
    comprobante_url?: true
    status?: true
    confirmado_en?: true
    notas_admin?: true
    creado_en?: true
  }

  export type PagoMaxAggregateInputType = {
    id?: true
    vendor_id?: true
    monto?: true
    plan_id?: true
    comprobante_url?: true
    status?: true
    confirmado_en?: true
    notas_admin?: true
    creado_en?: true
  }

  export type PagoCountAggregateInputType = {
    id?: true
    vendor_id?: true
    monto?: true
    plan_id?: true
    comprobante_url?: true
    status?: true
    confirmado_en?: true
    notas_admin?: true
    creado_en?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pago to aggregate.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type PagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithAggregationInput | PagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: PagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    id: string
    vendor_id: string
    monto: number
    plan_id: string
    comprobante_url: string | null
    status: string
    confirmado_en: Date | null
    notas_admin: string | null
    creado_en: Date
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type PagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor_id?: boolean
    monto?: boolean
    plan_id?: boolean
    comprobante_url?: boolean
    status?: boolean
    confirmado_en?: boolean
    notas_admin?: boolean
    creado_en?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor_id?: boolean
    monto?: boolean
    plan_id?: boolean
    comprobante_url?: boolean
    status?: boolean
    confirmado_en?: boolean
    notas_admin?: boolean
    creado_en?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectScalar = {
    id?: boolean
    vendor_id?: boolean
    monto?: boolean
    plan_id?: boolean
    comprobante_url?: boolean
    status?: boolean
    confirmado_en?: boolean
    notas_admin?: boolean
    creado_en?: boolean
  }

  export type PagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type PagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $PagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pago"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendor_id: string
      monto: number
      plan_id: string
      comprobante_url: string | null
      status: string
      confirmado_en: Date | null
      notas_admin: string | null
      creado_en: Date
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }

  type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = $Result.GetResult<Prisma.$PagoPayload, S>

  type PagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface PagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pago'], meta: { name: 'Pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {PagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoFindUniqueArgs>(args: SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoFindFirstArgs>(args?: SelectSubset<T, PagoFindFirstArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoWithIdOnly = await prisma.pago.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoFindManyArgs>(args?: SelectSubset<T, PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pago.
     * @param {PagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
     */
    create<T extends PagoCreateArgs>(args: SelectSubset<T, PagoCreateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pagos.
     * @param {PagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoCreateManyArgs>(args?: SelectSubset<T, PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagos and returns the data saved in the database.
     * @param {PagoCreateManyAndReturnArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagos and only return the `id`
     * const pagoWithIdOnly = await prisma.pago.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pago.
     * @param {PagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
     */
    delete<T extends PagoDeleteArgs>(args: SelectSubset<T, PagoDeleteArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pago.
     * @param {PagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoUpdateArgs>(args: SelectSubset<T, PagoUpdateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pagos.
     * @param {PagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoDeleteManyArgs>(args?: SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoUpdateManyArgs>(args: SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pago.
     * @param {PagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends PagoUpsertArgs>(args: SelectSubset<T, PagoUpsertArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagoCountArgs>(
      args?: Subset<T, PagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoGroupByArgs['orderBy'] }
        : { orderBy?: PagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pago model
   */
  readonly fields: PagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pago model
   */ 
  interface PagoFieldRefs {
    readonly id: FieldRef<"Pago", 'String'>
    readonly vendor_id: FieldRef<"Pago", 'String'>
    readonly monto: FieldRef<"Pago", 'Float'>
    readonly plan_id: FieldRef<"Pago", 'String'>
    readonly comprobante_url: FieldRef<"Pago", 'String'>
    readonly status: FieldRef<"Pago", 'String'>
    readonly confirmado_en: FieldRef<"Pago", 'DateTime'>
    readonly notas_admin: FieldRef<"Pago", 'String'>
    readonly creado_en: FieldRef<"Pago", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pago findUnique
   */
  export type PagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findUniqueOrThrow
   */
  export type PagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findFirst
   */
  export type PagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findFirstOrThrow
   */
  export type PagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findMany
   */
  export type PagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago create
   */
  export type PagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pago.
     */
    data: XOR<PagoCreateInput, PagoUncheckedCreateInput>
  }

  /**
   * Pago createMany
   */
  export type PagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pago createManyAndReturn
   */
  export type PagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pago update
   */
  export type PagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pago.
     */
    data: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
    /**
     * Choose, which Pago to update.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago updateMany
   */
  export type PagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
  }

  /**
   * Pago upsert
   */
  export type PagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pago to update in case it exists.
     */
    where: PagoWhereUniqueInput
    /**
     * In case the Pago found by the `where` argument doesn't exist, create a new Pago with this data.
     */
    create: XOR<PagoCreateInput, PagoUncheckedCreateInput>
    /**
     * In case the Pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
  }

  /**
   * Pago delete
   */
  export type PagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter which Pago to delete.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago deleteMany
   */
  export type PagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagoWhereInput
  }

  /**
   * Pago without action
   */
  export type PagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
  }


  /**
   * Model AjustesPlataforma
   */

  export type AggregateAjustesPlataforma = {
    _count: AjustesPlataformaCountAggregateOutputType | null
    _min: AjustesPlataformaMinAggregateOutputType | null
    _max: AjustesPlataformaMaxAggregateOutputType | null
  }

  export type AjustesPlataformaMinAggregateOutputType = {
    id: string | null
    qr_cobro_url: string | null
    tigo_money_numero: string | null
    texto_legal: string | null
    nombre_plataforma: string | null
    logo_url: string | null
    noticia_global: string | null
    whatsapp_soporte: string | null
  }

  export type AjustesPlataformaMaxAggregateOutputType = {
    id: string | null
    qr_cobro_url: string | null
    tigo_money_numero: string | null
    texto_legal: string | null
    nombre_plataforma: string | null
    logo_url: string | null
    noticia_global: string | null
    whatsapp_soporte: string | null
  }

  export type AjustesPlataformaCountAggregateOutputType = {
    id: number
    qr_cobro_url: number
    tigo_money_numero: number
    texto_legal: number
    nombre_plataforma: number
    logo_url: number
    noticia_global: number
    whatsapp_soporte: number
    _all: number
  }


  export type AjustesPlataformaMinAggregateInputType = {
    id?: true
    qr_cobro_url?: true
    tigo_money_numero?: true
    texto_legal?: true
    nombre_plataforma?: true
    logo_url?: true
    noticia_global?: true
    whatsapp_soporte?: true
  }

  export type AjustesPlataformaMaxAggregateInputType = {
    id?: true
    qr_cobro_url?: true
    tigo_money_numero?: true
    texto_legal?: true
    nombre_plataforma?: true
    logo_url?: true
    noticia_global?: true
    whatsapp_soporte?: true
  }

  export type AjustesPlataformaCountAggregateInputType = {
    id?: true
    qr_cobro_url?: true
    tigo_money_numero?: true
    texto_legal?: true
    nombre_plataforma?: true
    logo_url?: true
    noticia_global?: true
    whatsapp_soporte?: true
    _all?: true
  }

  export type AjustesPlataformaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AjustesPlataforma to aggregate.
     */
    where?: AjustesPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AjustesPlataformas to fetch.
     */
    orderBy?: AjustesPlataformaOrderByWithRelationInput | AjustesPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AjustesPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AjustesPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AjustesPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AjustesPlataformas
    **/
    _count?: true | AjustesPlataformaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AjustesPlataformaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AjustesPlataformaMaxAggregateInputType
  }

  export type GetAjustesPlataformaAggregateType<T extends AjustesPlataformaAggregateArgs> = {
        [P in keyof T & keyof AggregateAjustesPlataforma]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAjustesPlataforma[P]>
      : GetScalarType<T[P], AggregateAjustesPlataforma[P]>
  }




  export type AjustesPlataformaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AjustesPlataformaWhereInput
    orderBy?: AjustesPlataformaOrderByWithAggregationInput | AjustesPlataformaOrderByWithAggregationInput[]
    by: AjustesPlataformaScalarFieldEnum[] | AjustesPlataformaScalarFieldEnum
    having?: AjustesPlataformaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AjustesPlataformaCountAggregateInputType | true
    _min?: AjustesPlataformaMinAggregateInputType
    _max?: AjustesPlataformaMaxAggregateInputType
  }

  export type AjustesPlataformaGroupByOutputType = {
    id: string
    qr_cobro_url: string
    tigo_money_numero: string
    texto_legal: string
    nombre_plataforma: string
    logo_url: string | null
    noticia_global: string
    whatsapp_soporte: string
    _count: AjustesPlataformaCountAggregateOutputType | null
    _min: AjustesPlataformaMinAggregateOutputType | null
    _max: AjustesPlataformaMaxAggregateOutputType | null
  }

  type GetAjustesPlataformaGroupByPayload<T extends AjustesPlataformaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AjustesPlataformaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AjustesPlataformaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AjustesPlataformaGroupByOutputType[P]>
            : GetScalarType<T[P], AjustesPlataformaGroupByOutputType[P]>
        }
      >
    >


  export type AjustesPlataformaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qr_cobro_url?: boolean
    tigo_money_numero?: boolean
    texto_legal?: boolean
    nombre_plataforma?: boolean
    logo_url?: boolean
    noticia_global?: boolean
    whatsapp_soporte?: boolean
  }, ExtArgs["result"]["ajustesPlataforma"]>

  export type AjustesPlataformaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qr_cobro_url?: boolean
    tigo_money_numero?: boolean
    texto_legal?: boolean
    nombre_plataforma?: boolean
    logo_url?: boolean
    noticia_global?: boolean
    whatsapp_soporte?: boolean
  }, ExtArgs["result"]["ajustesPlataforma"]>

  export type AjustesPlataformaSelectScalar = {
    id?: boolean
    qr_cobro_url?: boolean
    tigo_money_numero?: boolean
    texto_legal?: boolean
    nombre_plataforma?: boolean
    logo_url?: boolean
    noticia_global?: boolean
    whatsapp_soporte?: boolean
  }


  export type $AjustesPlataformaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AjustesPlataforma"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      qr_cobro_url: string
      tigo_money_numero: string
      texto_legal: string
      nombre_plataforma: string
      logo_url: string | null
      noticia_global: string
      whatsapp_soporte: string
    }, ExtArgs["result"]["ajustesPlataforma"]>
    composites: {}
  }

  type AjustesPlataformaGetPayload<S extends boolean | null | undefined | AjustesPlataformaDefaultArgs> = $Result.GetResult<Prisma.$AjustesPlataformaPayload, S>

  type AjustesPlataformaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AjustesPlataformaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AjustesPlataformaCountAggregateInputType | true
    }

  export interface AjustesPlataformaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AjustesPlataforma'], meta: { name: 'AjustesPlataforma' } }
    /**
     * Find zero or one AjustesPlataforma that matches the filter.
     * @param {AjustesPlataformaFindUniqueArgs} args - Arguments to find a AjustesPlataforma
     * @example
     * // Get one AjustesPlataforma
     * const ajustesPlataforma = await prisma.ajustesPlataforma.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AjustesPlataformaFindUniqueArgs>(args: SelectSubset<T, AjustesPlataformaFindUniqueArgs<ExtArgs>>): Prisma__AjustesPlataformaClient<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AjustesPlataforma that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AjustesPlataformaFindUniqueOrThrowArgs} args - Arguments to find a AjustesPlataforma
     * @example
     * // Get one AjustesPlataforma
     * const ajustesPlataforma = await prisma.ajustesPlataforma.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AjustesPlataformaFindUniqueOrThrowArgs>(args: SelectSubset<T, AjustesPlataformaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AjustesPlataformaClient<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AjustesPlataforma that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AjustesPlataformaFindFirstArgs} args - Arguments to find a AjustesPlataforma
     * @example
     * // Get one AjustesPlataforma
     * const ajustesPlataforma = await prisma.ajustesPlataforma.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AjustesPlataformaFindFirstArgs>(args?: SelectSubset<T, AjustesPlataformaFindFirstArgs<ExtArgs>>): Prisma__AjustesPlataformaClient<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AjustesPlataforma that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AjustesPlataformaFindFirstOrThrowArgs} args - Arguments to find a AjustesPlataforma
     * @example
     * // Get one AjustesPlataforma
     * const ajustesPlataforma = await prisma.ajustesPlataforma.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AjustesPlataformaFindFirstOrThrowArgs>(args?: SelectSubset<T, AjustesPlataformaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AjustesPlataformaClient<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AjustesPlataformas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AjustesPlataformaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AjustesPlataformas
     * const ajustesPlataformas = await prisma.ajustesPlataforma.findMany()
     * 
     * // Get first 10 AjustesPlataformas
     * const ajustesPlataformas = await prisma.ajustesPlataforma.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ajustesPlataformaWithIdOnly = await prisma.ajustesPlataforma.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AjustesPlataformaFindManyArgs>(args?: SelectSubset<T, AjustesPlataformaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AjustesPlataforma.
     * @param {AjustesPlataformaCreateArgs} args - Arguments to create a AjustesPlataforma.
     * @example
     * // Create one AjustesPlataforma
     * const AjustesPlataforma = await prisma.ajustesPlataforma.create({
     *   data: {
     *     // ... data to create a AjustesPlataforma
     *   }
     * })
     * 
     */
    create<T extends AjustesPlataformaCreateArgs>(args: SelectSubset<T, AjustesPlataformaCreateArgs<ExtArgs>>): Prisma__AjustesPlataformaClient<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AjustesPlataformas.
     * @param {AjustesPlataformaCreateManyArgs} args - Arguments to create many AjustesPlataformas.
     * @example
     * // Create many AjustesPlataformas
     * const ajustesPlataforma = await prisma.ajustesPlataforma.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AjustesPlataformaCreateManyArgs>(args?: SelectSubset<T, AjustesPlataformaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AjustesPlataformas and returns the data saved in the database.
     * @param {AjustesPlataformaCreateManyAndReturnArgs} args - Arguments to create many AjustesPlataformas.
     * @example
     * // Create many AjustesPlataformas
     * const ajustesPlataforma = await prisma.ajustesPlataforma.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AjustesPlataformas and only return the `id`
     * const ajustesPlataformaWithIdOnly = await prisma.ajustesPlataforma.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AjustesPlataformaCreateManyAndReturnArgs>(args?: SelectSubset<T, AjustesPlataformaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AjustesPlataforma.
     * @param {AjustesPlataformaDeleteArgs} args - Arguments to delete one AjustesPlataforma.
     * @example
     * // Delete one AjustesPlataforma
     * const AjustesPlataforma = await prisma.ajustesPlataforma.delete({
     *   where: {
     *     // ... filter to delete one AjustesPlataforma
     *   }
     * })
     * 
     */
    delete<T extends AjustesPlataformaDeleteArgs>(args: SelectSubset<T, AjustesPlataformaDeleteArgs<ExtArgs>>): Prisma__AjustesPlataformaClient<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AjustesPlataforma.
     * @param {AjustesPlataformaUpdateArgs} args - Arguments to update one AjustesPlataforma.
     * @example
     * // Update one AjustesPlataforma
     * const ajustesPlataforma = await prisma.ajustesPlataforma.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AjustesPlataformaUpdateArgs>(args: SelectSubset<T, AjustesPlataformaUpdateArgs<ExtArgs>>): Prisma__AjustesPlataformaClient<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AjustesPlataformas.
     * @param {AjustesPlataformaDeleteManyArgs} args - Arguments to filter AjustesPlataformas to delete.
     * @example
     * // Delete a few AjustesPlataformas
     * const { count } = await prisma.ajustesPlataforma.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AjustesPlataformaDeleteManyArgs>(args?: SelectSubset<T, AjustesPlataformaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AjustesPlataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AjustesPlataformaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AjustesPlataformas
     * const ajustesPlataforma = await prisma.ajustesPlataforma.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AjustesPlataformaUpdateManyArgs>(args: SelectSubset<T, AjustesPlataformaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AjustesPlataforma.
     * @param {AjustesPlataformaUpsertArgs} args - Arguments to update or create a AjustesPlataforma.
     * @example
     * // Update or create a AjustesPlataforma
     * const ajustesPlataforma = await prisma.ajustesPlataforma.upsert({
     *   create: {
     *     // ... data to create a AjustesPlataforma
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AjustesPlataforma we want to update
     *   }
     * })
     */
    upsert<T extends AjustesPlataformaUpsertArgs>(args: SelectSubset<T, AjustesPlataformaUpsertArgs<ExtArgs>>): Prisma__AjustesPlataformaClient<$Result.GetResult<Prisma.$AjustesPlataformaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AjustesPlataformas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AjustesPlataformaCountArgs} args - Arguments to filter AjustesPlataformas to count.
     * @example
     * // Count the number of AjustesPlataformas
     * const count = await prisma.ajustesPlataforma.count({
     *   where: {
     *     // ... the filter for the AjustesPlataformas we want to count
     *   }
     * })
    **/
    count<T extends AjustesPlataformaCountArgs>(
      args?: Subset<T, AjustesPlataformaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AjustesPlataformaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AjustesPlataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AjustesPlataformaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AjustesPlataformaAggregateArgs>(args: Subset<T, AjustesPlataformaAggregateArgs>): Prisma.PrismaPromise<GetAjustesPlataformaAggregateType<T>>

    /**
     * Group by AjustesPlataforma.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AjustesPlataformaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AjustesPlataformaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AjustesPlataformaGroupByArgs['orderBy'] }
        : { orderBy?: AjustesPlataformaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AjustesPlataformaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAjustesPlataformaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AjustesPlataforma model
   */
  readonly fields: AjustesPlataformaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AjustesPlataforma.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AjustesPlataformaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AjustesPlataforma model
   */ 
  interface AjustesPlataformaFieldRefs {
    readonly id: FieldRef<"AjustesPlataforma", 'String'>
    readonly qr_cobro_url: FieldRef<"AjustesPlataforma", 'String'>
    readonly tigo_money_numero: FieldRef<"AjustesPlataforma", 'String'>
    readonly texto_legal: FieldRef<"AjustesPlataforma", 'String'>
    readonly nombre_plataforma: FieldRef<"AjustesPlataforma", 'String'>
    readonly logo_url: FieldRef<"AjustesPlataforma", 'String'>
    readonly noticia_global: FieldRef<"AjustesPlataforma", 'String'>
    readonly whatsapp_soporte: FieldRef<"AjustesPlataforma", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AjustesPlataforma findUnique
   */
  export type AjustesPlataformaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
    /**
     * Filter, which AjustesPlataforma to fetch.
     */
    where: AjustesPlataformaWhereUniqueInput
  }

  /**
   * AjustesPlataforma findUniqueOrThrow
   */
  export type AjustesPlataformaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
    /**
     * Filter, which AjustesPlataforma to fetch.
     */
    where: AjustesPlataformaWhereUniqueInput
  }

  /**
   * AjustesPlataforma findFirst
   */
  export type AjustesPlataformaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
    /**
     * Filter, which AjustesPlataforma to fetch.
     */
    where?: AjustesPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AjustesPlataformas to fetch.
     */
    orderBy?: AjustesPlataformaOrderByWithRelationInput | AjustesPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AjustesPlataformas.
     */
    cursor?: AjustesPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AjustesPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AjustesPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AjustesPlataformas.
     */
    distinct?: AjustesPlataformaScalarFieldEnum | AjustesPlataformaScalarFieldEnum[]
  }

  /**
   * AjustesPlataforma findFirstOrThrow
   */
  export type AjustesPlataformaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
    /**
     * Filter, which AjustesPlataforma to fetch.
     */
    where?: AjustesPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AjustesPlataformas to fetch.
     */
    orderBy?: AjustesPlataformaOrderByWithRelationInput | AjustesPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AjustesPlataformas.
     */
    cursor?: AjustesPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AjustesPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AjustesPlataformas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AjustesPlataformas.
     */
    distinct?: AjustesPlataformaScalarFieldEnum | AjustesPlataformaScalarFieldEnum[]
  }

  /**
   * AjustesPlataforma findMany
   */
  export type AjustesPlataformaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
    /**
     * Filter, which AjustesPlataformas to fetch.
     */
    where?: AjustesPlataformaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AjustesPlataformas to fetch.
     */
    orderBy?: AjustesPlataformaOrderByWithRelationInput | AjustesPlataformaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AjustesPlataformas.
     */
    cursor?: AjustesPlataformaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AjustesPlataformas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AjustesPlataformas.
     */
    skip?: number
    distinct?: AjustesPlataformaScalarFieldEnum | AjustesPlataformaScalarFieldEnum[]
  }

  /**
   * AjustesPlataforma create
   */
  export type AjustesPlataformaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
    /**
     * The data needed to create a AjustesPlataforma.
     */
    data?: XOR<AjustesPlataformaCreateInput, AjustesPlataformaUncheckedCreateInput>
  }

  /**
   * AjustesPlataforma createMany
   */
  export type AjustesPlataformaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AjustesPlataformas.
     */
    data: AjustesPlataformaCreateManyInput | AjustesPlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AjustesPlataforma createManyAndReturn
   */
  export type AjustesPlataformaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AjustesPlataformas.
     */
    data: AjustesPlataformaCreateManyInput | AjustesPlataformaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AjustesPlataforma update
   */
  export type AjustesPlataformaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
    /**
     * The data needed to update a AjustesPlataforma.
     */
    data: XOR<AjustesPlataformaUpdateInput, AjustesPlataformaUncheckedUpdateInput>
    /**
     * Choose, which AjustesPlataforma to update.
     */
    where: AjustesPlataformaWhereUniqueInput
  }

  /**
   * AjustesPlataforma updateMany
   */
  export type AjustesPlataformaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AjustesPlataformas.
     */
    data: XOR<AjustesPlataformaUpdateManyMutationInput, AjustesPlataformaUncheckedUpdateManyInput>
    /**
     * Filter which AjustesPlataformas to update
     */
    where?: AjustesPlataformaWhereInput
  }

  /**
   * AjustesPlataforma upsert
   */
  export type AjustesPlataformaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
    /**
     * The filter to search for the AjustesPlataforma to update in case it exists.
     */
    where: AjustesPlataformaWhereUniqueInput
    /**
     * In case the AjustesPlataforma found by the `where` argument doesn't exist, create a new AjustesPlataforma with this data.
     */
    create: XOR<AjustesPlataformaCreateInput, AjustesPlataformaUncheckedCreateInput>
    /**
     * In case the AjustesPlataforma was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AjustesPlataformaUpdateInput, AjustesPlataformaUncheckedUpdateInput>
  }

  /**
   * AjustesPlataforma delete
   */
  export type AjustesPlataformaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
    /**
     * Filter which AjustesPlataforma to delete.
     */
    where: AjustesPlataformaWhereUniqueInput
  }

  /**
   * AjustesPlataforma deleteMany
   */
  export type AjustesPlataformaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AjustesPlataformas to delete
     */
    where?: AjustesPlataformaWhereInput
  }

  /**
   * AjustesPlataforma without action
   */
  export type AjustesPlataformaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AjustesPlataforma
     */
    select?: AjustesPlataformaSelect<ExtArgs> | null
  }


  /**
   * Model ClickMarketplace
   */

  export type AggregateClickMarketplace = {
    _count: ClickMarketplaceCountAggregateOutputType | null
    _min: ClickMarketplaceMinAggregateOutputType | null
    _max: ClickMarketplaceMaxAggregateOutputType | null
  }

  export type ClickMarketplaceMinAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    servicio_id: string | null
    proveedor_id: string | null
    creado_en: Date | null
  }

  export type ClickMarketplaceMaxAggregateOutputType = {
    id: string | null
    vendor_id: string | null
    servicio_id: string | null
    proveedor_id: string | null
    creado_en: Date | null
  }

  export type ClickMarketplaceCountAggregateOutputType = {
    id: number
    vendor_id: number
    servicio_id: number
    proveedor_id: number
    creado_en: number
    _all: number
  }


  export type ClickMarketplaceMinAggregateInputType = {
    id?: true
    vendor_id?: true
    servicio_id?: true
    proveedor_id?: true
    creado_en?: true
  }

  export type ClickMarketplaceMaxAggregateInputType = {
    id?: true
    vendor_id?: true
    servicio_id?: true
    proveedor_id?: true
    creado_en?: true
  }

  export type ClickMarketplaceCountAggregateInputType = {
    id?: true
    vendor_id?: true
    servicio_id?: true
    proveedor_id?: true
    creado_en?: true
    _all?: true
  }

  export type ClickMarketplaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClickMarketplace to aggregate.
     */
    where?: ClickMarketplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickMarketplaces to fetch.
     */
    orderBy?: ClickMarketplaceOrderByWithRelationInput | ClickMarketplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClickMarketplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickMarketplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickMarketplaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClickMarketplaces
    **/
    _count?: true | ClickMarketplaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClickMarketplaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClickMarketplaceMaxAggregateInputType
  }

  export type GetClickMarketplaceAggregateType<T extends ClickMarketplaceAggregateArgs> = {
        [P in keyof T & keyof AggregateClickMarketplace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClickMarketplace[P]>
      : GetScalarType<T[P], AggregateClickMarketplace[P]>
  }




  export type ClickMarketplaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClickMarketplaceWhereInput
    orderBy?: ClickMarketplaceOrderByWithAggregationInput | ClickMarketplaceOrderByWithAggregationInput[]
    by: ClickMarketplaceScalarFieldEnum[] | ClickMarketplaceScalarFieldEnum
    having?: ClickMarketplaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClickMarketplaceCountAggregateInputType | true
    _min?: ClickMarketplaceMinAggregateInputType
    _max?: ClickMarketplaceMaxAggregateInputType
  }

  export type ClickMarketplaceGroupByOutputType = {
    id: string
    vendor_id: string
    servicio_id: string
    proveedor_id: string
    creado_en: Date
    _count: ClickMarketplaceCountAggregateOutputType | null
    _min: ClickMarketplaceMinAggregateOutputType | null
    _max: ClickMarketplaceMaxAggregateOutputType | null
  }

  type GetClickMarketplaceGroupByPayload<T extends ClickMarketplaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClickMarketplaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClickMarketplaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClickMarketplaceGroupByOutputType[P]>
            : GetScalarType<T[P], ClickMarketplaceGroupByOutputType[P]>
        }
      >
    >


  export type ClickMarketplaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor_id?: boolean
    servicio_id?: boolean
    proveedor_id?: boolean
    creado_en?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clickMarketplace"]>

  export type ClickMarketplaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vendor_id?: boolean
    servicio_id?: boolean
    proveedor_id?: boolean
    creado_en?: boolean
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioBaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clickMarketplace"]>

  export type ClickMarketplaceSelectScalar = {
    id?: boolean
    vendor_id?: boolean
    servicio_id?: boolean
    proveedor_id?: boolean
    creado_en?: boolean
  }

  export type ClickMarketplaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioBaseDefaultArgs<ExtArgs>
  }
  export type ClickMarketplaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vendor?: boolean | VendorDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioBaseDefaultArgs<ExtArgs>
  }

  export type $ClickMarketplacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClickMarketplace"
    objects: {
      vendor: Prisma.$VendorPayload<ExtArgs>
      servicio: Prisma.$ServicioBasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vendor_id: string
      servicio_id: string
      proveedor_id: string
      creado_en: Date
    }, ExtArgs["result"]["clickMarketplace"]>
    composites: {}
  }

  type ClickMarketplaceGetPayload<S extends boolean | null | undefined | ClickMarketplaceDefaultArgs> = $Result.GetResult<Prisma.$ClickMarketplacePayload, S>

  type ClickMarketplaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClickMarketplaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClickMarketplaceCountAggregateInputType | true
    }

  export interface ClickMarketplaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClickMarketplace'], meta: { name: 'ClickMarketplace' } }
    /**
     * Find zero or one ClickMarketplace that matches the filter.
     * @param {ClickMarketplaceFindUniqueArgs} args - Arguments to find a ClickMarketplace
     * @example
     * // Get one ClickMarketplace
     * const clickMarketplace = await prisma.clickMarketplace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClickMarketplaceFindUniqueArgs>(args: SelectSubset<T, ClickMarketplaceFindUniqueArgs<ExtArgs>>): Prisma__ClickMarketplaceClient<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClickMarketplace that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClickMarketplaceFindUniqueOrThrowArgs} args - Arguments to find a ClickMarketplace
     * @example
     * // Get one ClickMarketplace
     * const clickMarketplace = await prisma.clickMarketplace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClickMarketplaceFindUniqueOrThrowArgs>(args: SelectSubset<T, ClickMarketplaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClickMarketplaceClient<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClickMarketplace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickMarketplaceFindFirstArgs} args - Arguments to find a ClickMarketplace
     * @example
     * // Get one ClickMarketplace
     * const clickMarketplace = await prisma.clickMarketplace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClickMarketplaceFindFirstArgs>(args?: SelectSubset<T, ClickMarketplaceFindFirstArgs<ExtArgs>>): Prisma__ClickMarketplaceClient<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClickMarketplace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickMarketplaceFindFirstOrThrowArgs} args - Arguments to find a ClickMarketplace
     * @example
     * // Get one ClickMarketplace
     * const clickMarketplace = await prisma.clickMarketplace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClickMarketplaceFindFirstOrThrowArgs>(args?: SelectSubset<T, ClickMarketplaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClickMarketplaceClient<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClickMarketplaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickMarketplaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClickMarketplaces
     * const clickMarketplaces = await prisma.clickMarketplace.findMany()
     * 
     * // Get first 10 ClickMarketplaces
     * const clickMarketplaces = await prisma.clickMarketplace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clickMarketplaceWithIdOnly = await prisma.clickMarketplace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClickMarketplaceFindManyArgs>(args?: SelectSubset<T, ClickMarketplaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClickMarketplace.
     * @param {ClickMarketplaceCreateArgs} args - Arguments to create a ClickMarketplace.
     * @example
     * // Create one ClickMarketplace
     * const ClickMarketplace = await prisma.clickMarketplace.create({
     *   data: {
     *     // ... data to create a ClickMarketplace
     *   }
     * })
     * 
     */
    create<T extends ClickMarketplaceCreateArgs>(args: SelectSubset<T, ClickMarketplaceCreateArgs<ExtArgs>>): Prisma__ClickMarketplaceClient<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClickMarketplaces.
     * @param {ClickMarketplaceCreateManyArgs} args - Arguments to create many ClickMarketplaces.
     * @example
     * // Create many ClickMarketplaces
     * const clickMarketplace = await prisma.clickMarketplace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClickMarketplaceCreateManyArgs>(args?: SelectSubset<T, ClickMarketplaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClickMarketplaces and returns the data saved in the database.
     * @param {ClickMarketplaceCreateManyAndReturnArgs} args - Arguments to create many ClickMarketplaces.
     * @example
     * // Create many ClickMarketplaces
     * const clickMarketplace = await prisma.clickMarketplace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClickMarketplaces and only return the `id`
     * const clickMarketplaceWithIdOnly = await prisma.clickMarketplace.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClickMarketplaceCreateManyAndReturnArgs>(args?: SelectSubset<T, ClickMarketplaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClickMarketplace.
     * @param {ClickMarketplaceDeleteArgs} args - Arguments to delete one ClickMarketplace.
     * @example
     * // Delete one ClickMarketplace
     * const ClickMarketplace = await prisma.clickMarketplace.delete({
     *   where: {
     *     // ... filter to delete one ClickMarketplace
     *   }
     * })
     * 
     */
    delete<T extends ClickMarketplaceDeleteArgs>(args: SelectSubset<T, ClickMarketplaceDeleteArgs<ExtArgs>>): Prisma__ClickMarketplaceClient<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClickMarketplace.
     * @param {ClickMarketplaceUpdateArgs} args - Arguments to update one ClickMarketplace.
     * @example
     * // Update one ClickMarketplace
     * const clickMarketplace = await prisma.clickMarketplace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClickMarketplaceUpdateArgs>(args: SelectSubset<T, ClickMarketplaceUpdateArgs<ExtArgs>>): Prisma__ClickMarketplaceClient<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClickMarketplaces.
     * @param {ClickMarketplaceDeleteManyArgs} args - Arguments to filter ClickMarketplaces to delete.
     * @example
     * // Delete a few ClickMarketplaces
     * const { count } = await prisma.clickMarketplace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClickMarketplaceDeleteManyArgs>(args?: SelectSubset<T, ClickMarketplaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClickMarketplaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickMarketplaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClickMarketplaces
     * const clickMarketplace = await prisma.clickMarketplace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClickMarketplaceUpdateManyArgs>(args: SelectSubset<T, ClickMarketplaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClickMarketplace.
     * @param {ClickMarketplaceUpsertArgs} args - Arguments to update or create a ClickMarketplace.
     * @example
     * // Update or create a ClickMarketplace
     * const clickMarketplace = await prisma.clickMarketplace.upsert({
     *   create: {
     *     // ... data to create a ClickMarketplace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClickMarketplace we want to update
     *   }
     * })
     */
    upsert<T extends ClickMarketplaceUpsertArgs>(args: SelectSubset<T, ClickMarketplaceUpsertArgs<ExtArgs>>): Prisma__ClickMarketplaceClient<$Result.GetResult<Prisma.$ClickMarketplacePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClickMarketplaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickMarketplaceCountArgs} args - Arguments to filter ClickMarketplaces to count.
     * @example
     * // Count the number of ClickMarketplaces
     * const count = await prisma.clickMarketplace.count({
     *   where: {
     *     // ... the filter for the ClickMarketplaces we want to count
     *   }
     * })
    **/
    count<T extends ClickMarketplaceCountArgs>(
      args?: Subset<T, ClickMarketplaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClickMarketplaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClickMarketplace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickMarketplaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClickMarketplaceAggregateArgs>(args: Subset<T, ClickMarketplaceAggregateArgs>): Prisma.PrismaPromise<GetClickMarketplaceAggregateType<T>>

    /**
     * Group by ClickMarketplace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClickMarketplaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClickMarketplaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClickMarketplaceGroupByArgs['orderBy'] }
        : { orderBy?: ClickMarketplaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClickMarketplaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClickMarketplaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClickMarketplace model
   */
  readonly fields: ClickMarketplaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClickMarketplace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClickMarketplaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vendor<T extends VendorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VendorDefaultArgs<ExtArgs>>): Prisma__VendorClient<$Result.GetResult<Prisma.$VendorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    servicio<T extends ServicioBaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioBaseDefaultArgs<ExtArgs>>): Prisma__ServicioBaseClient<$Result.GetResult<Prisma.$ServicioBasePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClickMarketplace model
   */ 
  interface ClickMarketplaceFieldRefs {
    readonly id: FieldRef<"ClickMarketplace", 'String'>
    readonly vendor_id: FieldRef<"ClickMarketplace", 'String'>
    readonly servicio_id: FieldRef<"ClickMarketplace", 'String'>
    readonly proveedor_id: FieldRef<"ClickMarketplace", 'String'>
    readonly creado_en: FieldRef<"ClickMarketplace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClickMarketplace findUnique
   */
  export type ClickMarketplaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    /**
     * Filter, which ClickMarketplace to fetch.
     */
    where: ClickMarketplaceWhereUniqueInput
  }

  /**
   * ClickMarketplace findUniqueOrThrow
   */
  export type ClickMarketplaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    /**
     * Filter, which ClickMarketplace to fetch.
     */
    where: ClickMarketplaceWhereUniqueInput
  }

  /**
   * ClickMarketplace findFirst
   */
  export type ClickMarketplaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    /**
     * Filter, which ClickMarketplace to fetch.
     */
    where?: ClickMarketplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickMarketplaces to fetch.
     */
    orderBy?: ClickMarketplaceOrderByWithRelationInput | ClickMarketplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClickMarketplaces.
     */
    cursor?: ClickMarketplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickMarketplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickMarketplaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickMarketplaces.
     */
    distinct?: ClickMarketplaceScalarFieldEnum | ClickMarketplaceScalarFieldEnum[]
  }

  /**
   * ClickMarketplace findFirstOrThrow
   */
  export type ClickMarketplaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    /**
     * Filter, which ClickMarketplace to fetch.
     */
    where?: ClickMarketplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickMarketplaces to fetch.
     */
    orderBy?: ClickMarketplaceOrderByWithRelationInput | ClickMarketplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClickMarketplaces.
     */
    cursor?: ClickMarketplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickMarketplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickMarketplaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClickMarketplaces.
     */
    distinct?: ClickMarketplaceScalarFieldEnum | ClickMarketplaceScalarFieldEnum[]
  }

  /**
   * ClickMarketplace findMany
   */
  export type ClickMarketplaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    /**
     * Filter, which ClickMarketplaces to fetch.
     */
    where?: ClickMarketplaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClickMarketplaces to fetch.
     */
    orderBy?: ClickMarketplaceOrderByWithRelationInput | ClickMarketplaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClickMarketplaces.
     */
    cursor?: ClickMarketplaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClickMarketplaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClickMarketplaces.
     */
    skip?: number
    distinct?: ClickMarketplaceScalarFieldEnum | ClickMarketplaceScalarFieldEnum[]
  }

  /**
   * ClickMarketplace create
   */
  export type ClickMarketplaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    /**
     * The data needed to create a ClickMarketplace.
     */
    data: XOR<ClickMarketplaceCreateInput, ClickMarketplaceUncheckedCreateInput>
  }

  /**
   * ClickMarketplace createMany
   */
  export type ClickMarketplaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClickMarketplaces.
     */
    data: ClickMarketplaceCreateManyInput | ClickMarketplaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClickMarketplace createManyAndReturn
   */
  export type ClickMarketplaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ClickMarketplaces.
     */
    data: ClickMarketplaceCreateManyInput | ClickMarketplaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClickMarketplace update
   */
  export type ClickMarketplaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    /**
     * The data needed to update a ClickMarketplace.
     */
    data: XOR<ClickMarketplaceUpdateInput, ClickMarketplaceUncheckedUpdateInput>
    /**
     * Choose, which ClickMarketplace to update.
     */
    where: ClickMarketplaceWhereUniqueInput
  }

  /**
   * ClickMarketplace updateMany
   */
  export type ClickMarketplaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClickMarketplaces.
     */
    data: XOR<ClickMarketplaceUpdateManyMutationInput, ClickMarketplaceUncheckedUpdateManyInput>
    /**
     * Filter which ClickMarketplaces to update
     */
    where?: ClickMarketplaceWhereInput
  }

  /**
   * ClickMarketplace upsert
   */
  export type ClickMarketplaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    /**
     * The filter to search for the ClickMarketplace to update in case it exists.
     */
    where: ClickMarketplaceWhereUniqueInput
    /**
     * In case the ClickMarketplace found by the `where` argument doesn't exist, create a new ClickMarketplace with this data.
     */
    create: XOR<ClickMarketplaceCreateInput, ClickMarketplaceUncheckedCreateInput>
    /**
     * In case the ClickMarketplace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClickMarketplaceUpdateInput, ClickMarketplaceUncheckedUpdateInput>
  }

  /**
   * ClickMarketplace delete
   */
  export type ClickMarketplaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
    /**
     * Filter which ClickMarketplace to delete.
     */
    where: ClickMarketplaceWhereUniqueInput
  }

  /**
   * ClickMarketplace deleteMany
   */
  export type ClickMarketplaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClickMarketplaces to delete
     */
    where?: ClickMarketplaceWhereInput
  }

  /**
   * ClickMarketplace without action
   */
  export type ClickMarketplaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClickMarketplace
     */
    select?: ClickMarketplaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClickMarketplaceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VendorScalarFieldEnum: {
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

  export type VendorScalarFieldEnum = (typeof VendorScalarFieldEnum)[keyof typeof VendorScalarFieldEnum]


  export const PlanScalarFieldEnum: {
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

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const EstrenoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    plataforma: 'plataforma',
    fecha_estreno: 'fecha_estreno',
    imagen_url: 'imagen_url',
    activo: 'activo',
    creado_en: 'creado_en'
  };

  export type EstrenoScalarFieldEnum = (typeof EstrenoScalarFieldEnum)[keyof typeof EstrenoScalarFieldEnum]


  export const ServicioBaseScalarFieldEnum: {
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

  export type ServicioBaseScalarFieldEnum = (typeof ServicioBaseScalarFieldEnum)[keyof typeof ServicioBaseScalarFieldEnum]


  export const MiServicioScalarFieldEnum: {
    id: 'id',
    vendor_id: 'vendor_id',
    servicio_id: 'servicio_id',
    precio_venta: 'precio_venta',
    activo: 'activo',
    creado_en: 'creado_en'
  };

  export type MiServicioScalarFieldEnum = (typeof MiServicioScalarFieldEnum)[keyof typeof MiServicioScalarFieldEnum]


  export const ImagenScalarFieldEnum: {
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

  export type ImagenScalarFieldEnum = (typeof ImagenScalarFieldEnum)[keyof typeof ImagenScalarFieldEnum]


  export const PartidoScalarFieldEnum: {
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

  export type PartidoScalarFieldEnum = (typeof PartidoScalarFieldEnum)[keyof typeof PartidoScalarFieldEnum]


  export const MensajeRapidoScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    template: 'template',
    orden: 'orden',
    activo: 'activo'
  };

  export type MensajeRapidoScalarFieldEnum = (typeof MensajeRapidoScalarFieldEnum)[keyof typeof MensajeRapidoScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    vendor_id: 'vendor_id',
    servicio_id: 'servicio_id',
    notas: 'notas',
    status: 'status',
    creado_en: 'creado_en'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PagoScalarFieldEnum: {
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

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const AjustesPlataformaScalarFieldEnum: {
    id: 'id',
    qr_cobro_url: 'qr_cobro_url',
    tigo_money_numero: 'tigo_money_numero',
    texto_legal: 'texto_legal',
    nombre_plataforma: 'nombre_plataforma',
    logo_url: 'logo_url',
    noticia_global: 'noticia_global',
    whatsapp_soporte: 'whatsapp_soporte'
  };

  export type AjustesPlataformaScalarFieldEnum = (typeof AjustesPlataformaScalarFieldEnum)[keyof typeof AjustesPlataformaScalarFieldEnum]


  export const ClickMarketplaceScalarFieldEnum: {
    id: 'id',
    vendor_id: 'vendor_id',
    servicio_id: 'servicio_id',
    proveedor_id: 'proveedor_id',
    creado_en: 'creado_en'
  };

  export type ClickMarketplaceScalarFieldEnum = (typeof ClickMarketplaceScalarFieldEnum)[keyof typeof ClickMarketplaceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type VendorWhereInput = {
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    id?: StringFilter<"Vendor"> | string
    nombre?: StringFilter<"Vendor"> | string
    alias?: StringFilter<"Vendor"> | string
    telefono?: StringFilter<"Vendor"> | string
    password_hash?: StringFilter<"Vendor"> | string
    logo_url?: StringNullableFilter<"Vendor"> | string | null
    logo_cloudinary_id?: StringNullableFilter<"Vendor"> | string | null
    whatsapp?: StringNullableFilter<"Vendor"> | string | null
    plan_id?: StringFilter<"Vendor"> | string
    fecha_registro?: DateTimeFilter<"Vendor"> | Date | string
    fecha_vencimiento?: DateTimeFilter<"Vendor"> | Date | string
    status?: StringFilter<"Vendor"> | string
    rating?: FloatFilter<"Vendor"> | number
    biografia?: StringNullableFilter<"Vendor"> | string | null
    role?: StringFilter<"Vendor"> | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    mis_servicios?: MiServicioListRelationFilter
    pedidos?: PedidoListRelationFilter
    pagos?: PagoListRelationFilter
    servicios_aportados?: ServicioBaseListRelationFilter
    clicks_marketplace?: ClickMarketplaceListRelationFilter
  }

  export type VendorOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    alias?: SortOrder
    telefono?: SortOrder
    password_hash?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    logo_cloudinary_id?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    plan_id?: SortOrder
    fecha_registro?: SortOrder
    fecha_vencimiento?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    biografia?: SortOrderInput | SortOrder
    role?: SortOrder
    plan?: PlanOrderByWithRelationInput
    mis_servicios?: MiServicioOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
    pagos?: PagoOrderByRelationAggregateInput
    servicios_aportados?: ServicioBaseOrderByRelationAggregateInput
    clicks_marketplace?: ClickMarketplaceOrderByRelationAggregateInput
  }

  export type VendorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    alias?: string
    telefono?: string
    AND?: VendorWhereInput | VendorWhereInput[]
    OR?: VendorWhereInput[]
    NOT?: VendorWhereInput | VendorWhereInput[]
    nombre?: StringFilter<"Vendor"> | string
    password_hash?: StringFilter<"Vendor"> | string
    logo_url?: StringNullableFilter<"Vendor"> | string | null
    logo_cloudinary_id?: StringNullableFilter<"Vendor"> | string | null
    whatsapp?: StringNullableFilter<"Vendor"> | string | null
    plan_id?: StringFilter<"Vendor"> | string
    fecha_registro?: DateTimeFilter<"Vendor"> | Date | string
    fecha_vencimiento?: DateTimeFilter<"Vendor"> | Date | string
    status?: StringFilter<"Vendor"> | string
    rating?: FloatFilter<"Vendor"> | number
    biografia?: StringNullableFilter<"Vendor"> | string | null
    role?: StringFilter<"Vendor"> | string
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
    mis_servicios?: MiServicioListRelationFilter
    pedidos?: PedidoListRelationFilter
    pagos?: PagoListRelationFilter
    servicios_aportados?: ServicioBaseListRelationFilter
    clicks_marketplace?: ClickMarketplaceListRelationFilter
  }, "id" | "alias" | "telefono">

  export type VendorOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    alias?: SortOrder
    telefono?: SortOrder
    password_hash?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    logo_cloudinary_id?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    plan_id?: SortOrder
    fecha_registro?: SortOrder
    fecha_vencimiento?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    biografia?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: VendorCountOrderByAggregateInput
    _avg?: VendorAvgOrderByAggregateInput
    _max?: VendorMaxOrderByAggregateInput
    _min?: VendorMinOrderByAggregateInput
    _sum?: VendorSumOrderByAggregateInput
  }

  export type VendorScalarWhereWithAggregatesInput = {
    AND?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    OR?: VendorScalarWhereWithAggregatesInput[]
    NOT?: VendorScalarWhereWithAggregatesInput | VendorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vendor"> | string
    nombre?: StringWithAggregatesFilter<"Vendor"> | string
    alias?: StringWithAggregatesFilter<"Vendor"> | string
    telefono?: StringWithAggregatesFilter<"Vendor"> | string
    password_hash?: StringWithAggregatesFilter<"Vendor"> | string
    logo_url?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    logo_cloudinary_id?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    plan_id?: StringWithAggregatesFilter<"Vendor"> | string
    fecha_registro?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    fecha_vencimiento?: DateTimeWithAggregatesFilter<"Vendor"> | Date | string
    status?: StringWithAggregatesFilter<"Vendor"> | string
    rating?: FloatWithAggregatesFilter<"Vendor"> | number
    biografia?: StringNullableWithAggregatesFilter<"Vendor"> | string | null
    role?: StringWithAggregatesFilter<"Vendor"> | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    nombre?: StringFilter<"Plan"> | string
    precio?: FloatFilter<"Plan"> | number
    dias?: IntFilter<"Plan"> | number
    tipo?: StringFilter<"Plan"> | string
    limite_servicios?: IntNullableFilter<"Plan"> | number | null
    texto_limite?: StringNullableFilter<"Plan"> | string | null
    pedidos_automaticos?: BoolFilter<"Plan"> | boolean
    enlace_publico?: BoolFilter<"Plan"> | boolean
    marketplace_proveedor?: BoolFilter<"Plan"> | boolean
    activo?: BoolFilter<"Plan"> | boolean
    vendors?: VendorListRelationFilter
    pagos?: PagoListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    dias?: SortOrder
    tipo?: SortOrder
    limite_servicios?: SortOrderInput | SortOrder
    texto_limite?: SortOrderInput | SortOrder
    pedidos_automaticos?: SortOrder
    enlace_publico?: SortOrder
    marketplace_proveedor?: SortOrder
    activo?: SortOrder
    vendors?: VendorOrderByRelationAggregateInput
    pagos?: PagoOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    nombre?: StringFilter<"Plan"> | string
    precio?: FloatFilter<"Plan"> | number
    dias?: IntFilter<"Plan"> | number
    tipo?: StringFilter<"Plan"> | string
    limite_servicios?: IntNullableFilter<"Plan"> | number | null
    texto_limite?: StringNullableFilter<"Plan"> | string | null
    pedidos_automaticos?: BoolFilter<"Plan"> | boolean
    enlace_publico?: BoolFilter<"Plan"> | boolean
    marketplace_proveedor?: BoolFilter<"Plan"> | boolean
    activo?: BoolFilter<"Plan"> | boolean
    vendors?: VendorListRelationFilter
    pagos?: PagoListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    dias?: SortOrder
    tipo?: SortOrder
    limite_servicios?: SortOrderInput | SortOrder
    texto_limite?: SortOrderInput | SortOrder
    pedidos_automaticos?: SortOrder
    enlace_publico?: SortOrder
    marketplace_proveedor?: SortOrder
    activo?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    nombre?: StringWithAggregatesFilter<"Plan"> | string
    precio?: FloatWithAggregatesFilter<"Plan"> | number
    dias?: IntWithAggregatesFilter<"Plan"> | number
    tipo?: StringWithAggregatesFilter<"Plan"> | string
    limite_servicios?: IntNullableWithAggregatesFilter<"Plan"> | number | null
    texto_limite?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    pedidos_automaticos?: BoolWithAggregatesFilter<"Plan"> | boolean
    enlace_publico?: BoolWithAggregatesFilter<"Plan"> | boolean
    marketplace_proveedor?: BoolWithAggregatesFilter<"Plan"> | boolean
    activo?: BoolWithAggregatesFilter<"Plan"> | boolean
  }

  export type EstrenoWhereInput = {
    AND?: EstrenoWhereInput | EstrenoWhereInput[]
    OR?: EstrenoWhereInput[]
    NOT?: EstrenoWhereInput | EstrenoWhereInput[]
    id?: StringFilter<"Estreno"> | string
    titulo?: StringFilter<"Estreno"> | string
    descripcion?: StringNullableFilter<"Estreno"> | string | null
    plataforma?: StringFilter<"Estreno"> | string
    fecha_estreno?: DateTimeNullableFilter<"Estreno"> | Date | string | null
    imagen_url?: StringNullableFilter<"Estreno"> | string | null
    activo?: BoolFilter<"Estreno"> | boolean
    creado_en?: DateTimeFilter<"Estreno"> | Date | string
  }

  export type EstrenoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    plataforma?: SortOrder
    fecha_estreno?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type EstrenoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EstrenoWhereInput | EstrenoWhereInput[]
    OR?: EstrenoWhereInput[]
    NOT?: EstrenoWhereInput | EstrenoWhereInput[]
    titulo?: StringFilter<"Estreno"> | string
    descripcion?: StringNullableFilter<"Estreno"> | string | null
    plataforma?: StringFilter<"Estreno"> | string
    fecha_estreno?: DateTimeNullableFilter<"Estreno"> | Date | string | null
    imagen_url?: StringNullableFilter<"Estreno"> | string | null
    activo?: BoolFilter<"Estreno"> | boolean
    creado_en?: DateTimeFilter<"Estreno"> | Date | string
  }, "id">

  export type EstrenoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    plataforma?: SortOrder
    fecha_estreno?: SortOrderInput | SortOrder
    imagen_url?: SortOrderInput | SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    _count?: EstrenoCountOrderByAggregateInput
    _max?: EstrenoMaxOrderByAggregateInput
    _min?: EstrenoMinOrderByAggregateInput
  }

  export type EstrenoScalarWhereWithAggregatesInput = {
    AND?: EstrenoScalarWhereWithAggregatesInput | EstrenoScalarWhereWithAggregatesInput[]
    OR?: EstrenoScalarWhereWithAggregatesInput[]
    NOT?: EstrenoScalarWhereWithAggregatesInput | EstrenoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Estreno"> | string
    titulo?: StringWithAggregatesFilter<"Estreno"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Estreno"> | string | null
    plataforma?: StringWithAggregatesFilter<"Estreno"> | string
    fecha_estreno?: DateTimeNullableWithAggregatesFilter<"Estreno"> | Date | string | null
    imagen_url?: StringNullableWithAggregatesFilter<"Estreno"> | string | null
    activo?: BoolWithAggregatesFilter<"Estreno"> | boolean
    creado_en?: DateTimeWithAggregatesFilter<"Estreno"> | Date | string
  }

  export type ServicioBaseWhereInput = {
    AND?: ServicioBaseWhereInput | ServicioBaseWhereInput[]
    OR?: ServicioBaseWhereInput[]
    NOT?: ServicioBaseWhereInput | ServicioBaseWhereInput[]
    id?: StringFilter<"ServicioBase"> | string
    nombre?: StringFilter<"ServicioBase"> | string
    logo_url?: StringFilter<"ServicioBase"> | string
    descripcion_base?: StringFilter<"ServicioBase"> | string
    precio_sugerido?: FloatFilter<"ServicioBase"> | number
    categoria?: StringFilter<"ServicioBase"> | string
    es_iptv_propio?: BoolFilter<"ServicioBase"> | boolean
    estado_actual?: StringFilter<"ServicioBase"> | string
    nota_estado?: StringNullableFilter<"ServicioBase"> | string | null
    proveedor_id?: StringNullableFilter<"ServicioBase"> | string | null
    comision_pct?: FloatFilter<"ServicioBase"> | number
    estado_aprobacion?: StringFilter<"ServicioBase"> | string
    activo?: BoolFilter<"ServicioBase"> | boolean
    mis_servicios?: MiServicioListRelationFilter
    proveedor?: XOR<VendorNullableRelationFilter, VendorWhereInput> | null
    clicks?: ClickMarketplaceListRelationFilter
    imagenes?: ImagenListRelationFilter
  }

  export type ServicioBaseOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    logo_url?: SortOrder
    descripcion_base?: SortOrder
    precio_sugerido?: SortOrder
    categoria?: SortOrder
    es_iptv_propio?: SortOrder
    estado_actual?: SortOrder
    nota_estado?: SortOrderInput | SortOrder
    proveedor_id?: SortOrderInput | SortOrder
    comision_pct?: SortOrder
    estado_aprobacion?: SortOrder
    activo?: SortOrder
    mis_servicios?: MiServicioOrderByRelationAggregateInput
    proveedor?: VendorOrderByWithRelationInput
    clicks?: ClickMarketplaceOrderByRelationAggregateInput
    imagenes?: ImagenOrderByRelationAggregateInput
  }

  export type ServicioBaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServicioBaseWhereInput | ServicioBaseWhereInput[]
    OR?: ServicioBaseWhereInput[]
    NOT?: ServicioBaseWhereInput | ServicioBaseWhereInput[]
    nombre?: StringFilter<"ServicioBase"> | string
    logo_url?: StringFilter<"ServicioBase"> | string
    descripcion_base?: StringFilter<"ServicioBase"> | string
    precio_sugerido?: FloatFilter<"ServicioBase"> | number
    categoria?: StringFilter<"ServicioBase"> | string
    es_iptv_propio?: BoolFilter<"ServicioBase"> | boolean
    estado_actual?: StringFilter<"ServicioBase"> | string
    nota_estado?: StringNullableFilter<"ServicioBase"> | string | null
    proveedor_id?: StringNullableFilter<"ServicioBase"> | string | null
    comision_pct?: FloatFilter<"ServicioBase"> | number
    estado_aprobacion?: StringFilter<"ServicioBase"> | string
    activo?: BoolFilter<"ServicioBase"> | boolean
    mis_servicios?: MiServicioListRelationFilter
    proveedor?: XOR<VendorNullableRelationFilter, VendorWhereInput> | null
    clicks?: ClickMarketplaceListRelationFilter
    imagenes?: ImagenListRelationFilter
  }, "id">

  export type ServicioBaseOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    logo_url?: SortOrder
    descripcion_base?: SortOrder
    precio_sugerido?: SortOrder
    categoria?: SortOrder
    es_iptv_propio?: SortOrder
    estado_actual?: SortOrder
    nota_estado?: SortOrderInput | SortOrder
    proveedor_id?: SortOrderInput | SortOrder
    comision_pct?: SortOrder
    estado_aprobacion?: SortOrder
    activo?: SortOrder
    _count?: ServicioBaseCountOrderByAggregateInput
    _avg?: ServicioBaseAvgOrderByAggregateInput
    _max?: ServicioBaseMaxOrderByAggregateInput
    _min?: ServicioBaseMinOrderByAggregateInput
    _sum?: ServicioBaseSumOrderByAggregateInput
  }

  export type ServicioBaseScalarWhereWithAggregatesInput = {
    AND?: ServicioBaseScalarWhereWithAggregatesInput | ServicioBaseScalarWhereWithAggregatesInput[]
    OR?: ServicioBaseScalarWhereWithAggregatesInput[]
    NOT?: ServicioBaseScalarWhereWithAggregatesInput | ServicioBaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServicioBase"> | string
    nombre?: StringWithAggregatesFilter<"ServicioBase"> | string
    logo_url?: StringWithAggregatesFilter<"ServicioBase"> | string
    descripcion_base?: StringWithAggregatesFilter<"ServicioBase"> | string
    precio_sugerido?: FloatWithAggregatesFilter<"ServicioBase"> | number
    categoria?: StringWithAggregatesFilter<"ServicioBase"> | string
    es_iptv_propio?: BoolWithAggregatesFilter<"ServicioBase"> | boolean
    estado_actual?: StringWithAggregatesFilter<"ServicioBase"> | string
    nota_estado?: StringNullableWithAggregatesFilter<"ServicioBase"> | string | null
    proveedor_id?: StringNullableWithAggregatesFilter<"ServicioBase"> | string | null
    comision_pct?: FloatWithAggregatesFilter<"ServicioBase"> | number
    estado_aprobacion?: StringWithAggregatesFilter<"ServicioBase"> | string
    activo?: BoolWithAggregatesFilter<"ServicioBase"> | boolean
  }

  export type MiServicioWhereInput = {
    AND?: MiServicioWhereInput | MiServicioWhereInput[]
    OR?: MiServicioWhereInput[]
    NOT?: MiServicioWhereInput | MiServicioWhereInput[]
    id?: StringFilter<"MiServicio"> | string
    vendor_id?: StringFilter<"MiServicio"> | string
    servicio_id?: StringFilter<"MiServicio"> | string
    precio_venta?: FloatFilter<"MiServicio"> | number
    activo?: BoolFilter<"MiServicio"> | boolean
    creado_en?: DateTimeFilter<"MiServicio"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    servicio?: XOR<ServicioBaseRelationFilter, ServicioBaseWhereInput>
  }

  export type MiServicioOrderByWithRelationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    precio_venta?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    servicio?: ServicioBaseOrderByWithRelationInput
  }

  export type MiServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vendor_id_servicio_id?: MiServicioVendor_idServicio_idCompoundUniqueInput
    AND?: MiServicioWhereInput | MiServicioWhereInput[]
    OR?: MiServicioWhereInput[]
    NOT?: MiServicioWhereInput | MiServicioWhereInput[]
    vendor_id?: StringFilter<"MiServicio"> | string
    servicio_id?: StringFilter<"MiServicio"> | string
    precio_venta?: FloatFilter<"MiServicio"> | number
    activo?: BoolFilter<"MiServicio"> | boolean
    creado_en?: DateTimeFilter<"MiServicio"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    servicio?: XOR<ServicioBaseRelationFilter, ServicioBaseWhereInput>
  }, "id" | "vendor_id_servicio_id">

  export type MiServicioOrderByWithAggregationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    precio_venta?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    _count?: MiServicioCountOrderByAggregateInput
    _avg?: MiServicioAvgOrderByAggregateInput
    _max?: MiServicioMaxOrderByAggregateInput
    _min?: MiServicioMinOrderByAggregateInput
    _sum?: MiServicioSumOrderByAggregateInput
  }

  export type MiServicioScalarWhereWithAggregatesInput = {
    AND?: MiServicioScalarWhereWithAggregatesInput | MiServicioScalarWhereWithAggregatesInput[]
    OR?: MiServicioScalarWhereWithAggregatesInput[]
    NOT?: MiServicioScalarWhereWithAggregatesInput | MiServicioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MiServicio"> | string
    vendor_id?: StringWithAggregatesFilter<"MiServicio"> | string
    servicio_id?: StringWithAggregatesFilter<"MiServicio"> | string
    precio_venta?: FloatWithAggregatesFilter<"MiServicio"> | number
    activo?: BoolWithAggregatesFilter<"MiServicio"> | boolean
    creado_en?: DateTimeWithAggregatesFilter<"MiServicio"> | Date | string
  }

  export type ImagenWhereInput = {
    AND?: ImagenWhereInput | ImagenWhereInput[]
    OR?: ImagenWhereInput[]
    NOT?: ImagenWhereInput | ImagenWhereInput[]
    id?: StringFilter<"Imagen"> | string
    titulo?: StringFilter<"Imagen"> | string
    public_id?: StringFilter<"Imagen"> | string
    url_base?: StringFilter<"Imagen"> | string
    etiquetas?: StringFilter<"Imagen"> | string
    categoria?: StringFilter<"Imagen"> | string
    activo?: BoolFilter<"Imagen"> | boolean
    creado_en?: DateTimeFilter<"Imagen"> | Date | string
    servicio_id?: StringNullableFilter<"Imagen"> | string | null
    servicio?: XOR<ServicioBaseNullableRelationFilter, ServicioBaseWhereInput> | null
  }

  export type ImagenOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    public_id?: SortOrder
    url_base?: SortOrder
    etiquetas?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    servicio_id?: SortOrderInput | SortOrder
    servicio?: ServicioBaseOrderByWithRelationInput
  }

  export type ImagenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImagenWhereInput | ImagenWhereInput[]
    OR?: ImagenWhereInput[]
    NOT?: ImagenWhereInput | ImagenWhereInput[]
    titulo?: StringFilter<"Imagen"> | string
    public_id?: StringFilter<"Imagen"> | string
    url_base?: StringFilter<"Imagen"> | string
    etiquetas?: StringFilter<"Imagen"> | string
    categoria?: StringFilter<"Imagen"> | string
    activo?: BoolFilter<"Imagen"> | boolean
    creado_en?: DateTimeFilter<"Imagen"> | Date | string
    servicio_id?: StringNullableFilter<"Imagen"> | string | null
    servicio?: XOR<ServicioBaseNullableRelationFilter, ServicioBaseWhereInput> | null
  }, "id">

  export type ImagenOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    public_id?: SortOrder
    url_base?: SortOrder
    etiquetas?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    servicio_id?: SortOrderInput | SortOrder
    _count?: ImagenCountOrderByAggregateInput
    _max?: ImagenMaxOrderByAggregateInput
    _min?: ImagenMinOrderByAggregateInput
  }

  export type ImagenScalarWhereWithAggregatesInput = {
    AND?: ImagenScalarWhereWithAggregatesInput | ImagenScalarWhereWithAggregatesInput[]
    OR?: ImagenScalarWhereWithAggregatesInput[]
    NOT?: ImagenScalarWhereWithAggregatesInput | ImagenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Imagen"> | string
    titulo?: StringWithAggregatesFilter<"Imagen"> | string
    public_id?: StringWithAggregatesFilter<"Imagen"> | string
    url_base?: StringWithAggregatesFilter<"Imagen"> | string
    etiquetas?: StringWithAggregatesFilter<"Imagen"> | string
    categoria?: StringWithAggregatesFilter<"Imagen"> | string
    activo?: BoolWithAggregatesFilter<"Imagen"> | boolean
    creado_en?: DateTimeWithAggregatesFilter<"Imagen"> | Date | string
    servicio_id?: StringNullableWithAggregatesFilter<"Imagen"> | string | null
  }

  export type PartidoWhereInput = {
    AND?: PartidoWhereInput | PartidoWhereInput[]
    OR?: PartidoWhereInput[]
    NOT?: PartidoWhereInput | PartidoWhereInput[]
    id?: StringFilter<"Partido"> | string
    fecha?: DateTimeFilter<"Partido"> | Date | string
    hora?: StringFilter<"Partido"> | string
    equipo_local?: StringFilter<"Partido"> | string
    equipo_visita?: StringFilter<"Partido"> | string
    logo_local?: StringNullableFilter<"Partido"> | string | null
    logo_visita?: StringNullableFilter<"Partido"> | string | null
    canal?: StringFilter<"Partido"> | string
    liga?: StringNullableFilter<"Partido"> | string | null
    requiere_iptv?: BoolFilter<"Partido"> | boolean
    push_enviado?: BoolFilter<"Partido"> | boolean
    activo?: BoolFilter<"Partido"> | boolean
  }

  export type PartidoOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    equipo_local?: SortOrder
    equipo_visita?: SortOrder
    logo_local?: SortOrderInput | SortOrder
    logo_visita?: SortOrderInput | SortOrder
    canal?: SortOrder
    liga?: SortOrderInput | SortOrder
    requiere_iptv?: SortOrder
    push_enviado?: SortOrder
    activo?: SortOrder
  }

  export type PartidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartidoWhereInput | PartidoWhereInput[]
    OR?: PartidoWhereInput[]
    NOT?: PartidoWhereInput | PartidoWhereInput[]
    fecha?: DateTimeFilter<"Partido"> | Date | string
    hora?: StringFilter<"Partido"> | string
    equipo_local?: StringFilter<"Partido"> | string
    equipo_visita?: StringFilter<"Partido"> | string
    logo_local?: StringNullableFilter<"Partido"> | string | null
    logo_visita?: StringNullableFilter<"Partido"> | string | null
    canal?: StringFilter<"Partido"> | string
    liga?: StringNullableFilter<"Partido"> | string | null
    requiere_iptv?: BoolFilter<"Partido"> | boolean
    push_enviado?: BoolFilter<"Partido"> | boolean
    activo?: BoolFilter<"Partido"> | boolean
  }, "id">

  export type PartidoOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    equipo_local?: SortOrder
    equipo_visita?: SortOrder
    logo_local?: SortOrderInput | SortOrder
    logo_visita?: SortOrderInput | SortOrder
    canal?: SortOrder
    liga?: SortOrderInput | SortOrder
    requiere_iptv?: SortOrder
    push_enviado?: SortOrder
    activo?: SortOrder
    _count?: PartidoCountOrderByAggregateInput
    _max?: PartidoMaxOrderByAggregateInput
    _min?: PartidoMinOrderByAggregateInput
  }

  export type PartidoScalarWhereWithAggregatesInput = {
    AND?: PartidoScalarWhereWithAggregatesInput | PartidoScalarWhereWithAggregatesInput[]
    OR?: PartidoScalarWhereWithAggregatesInput[]
    NOT?: PartidoScalarWhereWithAggregatesInput | PartidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Partido"> | string
    fecha?: DateTimeWithAggregatesFilter<"Partido"> | Date | string
    hora?: StringWithAggregatesFilter<"Partido"> | string
    equipo_local?: StringWithAggregatesFilter<"Partido"> | string
    equipo_visita?: StringWithAggregatesFilter<"Partido"> | string
    logo_local?: StringNullableWithAggregatesFilter<"Partido"> | string | null
    logo_visita?: StringNullableWithAggregatesFilter<"Partido"> | string | null
    canal?: StringWithAggregatesFilter<"Partido"> | string
    liga?: StringNullableWithAggregatesFilter<"Partido"> | string | null
    requiere_iptv?: BoolWithAggregatesFilter<"Partido"> | boolean
    push_enviado?: BoolWithAggregatesFilter<"Partido"> | boolean
    activo?: BoolWithAggregatesFilter<"Partido"> | boolean
  }

  export type MensajeRapidoWhereInput = {
    AND?: MensajeRapidoWhereInput | MensajeRapidoWhereInput[]
    OR?: MensajeRapidoWhereInput[]
    NOT?: MensajeRapidoWhereInput | MensajeRapidoWhereInput[]
    id?: StringFilter<"MensajeRapido"> | string
    titulo?: StringFilter<"MensajeRapido"> | string
    template?: StringFilter<"MensajeRapido"> | string
    orden?: IntFilter<"MensajeRapido"> | number
    activo?: BoolFilter<"MensajeRapido"> | boolean
  }

  export type MensajeRapidoOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    template?: SortOrder
    orden?: SortOrder
    activo?: SortOrder
  }

  export type MensajeRapidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MensajeRapidoWhereInput | MensajeRapidoWhereInput[]
    OR?: MensajeRapidoWhereInput[]
    NOT?: MensajeRapidoWhereInput | MensajeRapidoWhereInput[]
    titulo?: StringFilter<"MensajeRapido"> | string
    template?: StringFilter<"MensajeRapido"> | string
    orden?: IntFilter<"MensajeRapido"> | number
    activo?: BoolFilter<"MensajeRapido"> | boolean
  }, "id">

  export type MensajeRapidoOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    template?: SortOrder
    orden?: SortOrder
    activo?: SortOrder
    _count?: MensajeRapidoCountOrderByAggregateInput
    _avg?: MensajeRapidoAvgOrderByAggregateInput
    _max?: MensajeRapidoMaxOrderByAggregateInput
    _min?: MensajeRapidoMinOrderByAggregateInput
    _sum?: MensajeRapidoSumOrderByAggregateInput
  }

  export type MensajeRapidoScalarWhereWithAggregatesInput = {
    AND?: MensajeRapidoScalarWhereWithAggregatesInput | MensajeRapidoScalarWhereWithAggregatesInput[]
    OR?: MensajeRapidoScalarWhereWithAggregatesInput[]
    NOT?: MensajeRapidoScalarWhereWithAggregatesInput | MensajeRapidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MensajeRapido"> | string
    titulo?: StringWithAggregatesFilter<"MensajeRapido"> | string
    template?: StringWithAggregatesFilter<"MensajeRapido"> | string
    orden?: IntWithAggregatesFilter<"MensajeRapido"> | number
    activo?: BoolWithAggregatesFilter<"MensajeRapido"> | boolean
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: StringFilter<"Pedido"> | string
    vendor_id?: StringFilter<"Pedido"> | string
    servicio_id?: StringFilter<"Pedido"> | string
    notas?: StringNullableFilter<"Pedido"> | string | null
    status?: StringFilter<"Pedido"> | string
    creado_en?: DateTimeFilter<"Pedido"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    notas?: SortOrderInput | SortOrder
    status?: SortOrder
    creado_en?: SortOrder
    vendor?: VendorOrderByWithRelationInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    vendor_id?: StringFilter<"Pedido"> | string
    servicio_id?: StringFilter<"Pedido"> | string
    notas?: StringNullableFilter<"Pedido"> | string | null
    status?: StringFilter<"Pedido"> | string
    creado_en?: DateTimeFilter<"Pedido"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    notas?: SortOrderInput | SortOrder
    status?: SortOrder
    creado_en?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pedido"> | string
    vendor_id?: StringWithAggregatesFilter<"Pedido"> | string
    servicio_id?: StringWithAggregatesFilter<"Pedido"> | string
    notas?: StringNullableWithAggregatesFilter<"Pedido"> | string | null
    status?: StringWithAggregatesFilter<"Pedido"> | string
    creado_en?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
  }

  export type PagoWhereInput = {
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    id?: StringFilter<"Pago"> | string
    vendor_id?: StringFilter<"Pago"> | string
    monto?: FloatFilter<"Pago"> | number
    plan_id?: StringFilter<"Pago"> | string
    comprobante_url?: StringNullableFilter<"Pago"> | string | null
    status?: StringFilter<"Pago"> | string
    confirmado_en?: DateTimeNullableFilter<"Pago"> | Date | string | null
    notas_admin?: StringNullableFilter<"Pago"> | string | null
    creado_en?: DateTimeFilter<"Pago"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
  }

  export type PagoOrderByWithRelationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    monto?: SortOrder
    plan_id?: SortOrder
    comprobante_url?: SortOrderInput | SortOrder
    status?: SortOrder
    confirmado_en?: SortOrderInput | SortOrder
    notas_admin?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
  }

  export type PagoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    vendor_id?: StringFilter<"Pago"> | string
    monto?: FloatFilter<"Pago"> | number
    plan_id?: StringFilter<"Pago"> | string
    comprobante_url?: StringNullableFilter<"Pago"> | string | null
    status?: StringFilter<"Pago"> | string
    confirmado_en?: DateTimeNullableFilter<"Pago"> | Date | string | null
    notas_admin?: StringNullableFilter<"Pago"> | string | null
    creado_en?: DateTimeFilter<"Pago"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    plan?: XOR<PlanRelationFilter, PlanWhereInput>
  }, "id">

  export type PagoOrderByWithAggregationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    monto?: SortOrder
    plan_id?: SortOrder
    comprobante_url?: SortOrderInput | SortOrder
    status?: SortOrder
    confirmado_en?: SortOrderInput | SortOrder
    notas_admin?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    _count?: PagoCountOrderByAggregateInput
    _avg?: PagoAvgOrderByAggregateInput
    _max?: PagoMaxOrderByAggregateInput
    _min?: PagoMinOrderByAggregateInput
    _sum?: PagoSumOrderByAggregateInput
  }

  export type PagoScalarWhereWithAggregatesInput = {
    AND?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    OR?: PagoScalarWhereWithAggregatesInput[]
    NOT?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pago"> | string
    vendor_id?: StringWithAggregatesFilter<"Pago"> | string
    monto?: FloatWithAggregatesFilter<"Pago"> | number
    plan_id?: StringWithAggregatesFilter<"Pago"> | string
    comprobante_url?: StringNullableWithAggregatesFilter<"Pago"> | string | null
    status?: StringWithAggregatesFilter<"Pago"> | string
    confirmado_en?: DateTimeNullableWithAggregatesFilter<"Pago"> | Date | string | null
    notas_admin?: StringNullableWithAggregatesFilter<"Pago"> | string | null
    creado_en?: DateTimeWithAggregatesFilter<"Pago"> | Date | string
  }

  export type AjustesPlataformaWhereInput = {
    AND?: AjustesPlataformaWhereInput | AjustesPlataformaWhereInput[]
    OR?: AjustesPlataformaWhereInput[]
    NOT?: AjustesPlataformaWhereInput | AjustesPlataformaWhereInput[]
    id?: StringFilter<"AjustesPlataforma"> | string
    qr_cobro_url?: StringFilter<"AjustesPlataforma"> | string
    tigo_money_numero?: StringFilter<"AjustesPlataforma"> | string
    texto_legal?: StringFilter<"AjustesPlataforma"> | string
    nombre_plataforma?: StringFilter<"AjustesPlataforma"> | string
    logo_url?: StringNullableFilter<"AjustesPlataforma"> | string | null
    noticia_global?: StringFilter<"AjustesPlataforma"> | string
    whatsapp_soporte?: StringFilter<"AjustesPlataforma"> | string
  }

  export type AjustesPlataformaOrderByWithRelationInput = {
    id?: SortOrder
    qr_cobro_url?: SortOrder
    tigo_money_numero?: SortOrder
    texto_legal?: SortOrder
    nombre_plataforma?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    noticia_global?: SortOrder
    whatsapp_soporte?: SortOrder
  }

  export type AjustesPlataformaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AjustesPlataformaWhereInput | AjustesPlataformaWhereInput[]
    OR?: AjustesPlataformaWhereInput[]
    NOT?: AjustesPlataformaWhereInput | AjustesPlataformaWhereInput[]
    qr_cobro_url?: StringFilter<"AjustesPlataforma"> | string
    tigo_money_numero?: StringFilter<"AjustesPlataforma"> | string
    texto_legal?: StringFilter<"AjustesPlataforma"> | string
    nombre_plataforma?: StringFilter<"AjustesPlataforma"> | string
    logo_url?: StringNullableFilter<"AjustesPlataforma"> | string | null
    noticia_global?: StringFilter<"AjustesPlataforma"> | string
    whatsapp_soporte?: StringFilter<"AjustesPlataforma"> | string
  }, "id">

  export type AjustesPlataformaOrderByWithAggregationInput = {
    id?: SortOrder
    qr_cobro_url?: SortOrder
    tigo_money_numero?: SortOrder
    texto_legal?: SortOrder
    nombre_plataforma?: SortOrder
    logo_url?: SortOrderInput | SortOrder
    noticia_global?: SortOrder
    whatsapp_soporte?: SortOrder
    _count?: AjustesPlataformaCountOrderByAggregateInput
    _max?: AjustesPlataformaMaxOrderByAggregateInput
    _min?: AjustesPlataformaMinOrderByAggregateInput
  }

  export type AjustesPlataformaScalarWhereWithAggregatesInput = {
    AND?: AjustesPlataformaScalarWhereWithAggregatesInput | AjustesPlataformaScalarWhereWithAggregatesInput[]
    OR?: AjustesPlataformaScalarWhereWithAggregatesInput[]
    NOT?: AjustesPlataformaScalarWhereWithAggregatesInput | AjustesPlataformaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AjustesPlataforma"> | string
    qr_cobro_url?: StringWithAggregatesFilter<"AjustesPlataforma"> | string
    tigo_money_numero?: StringWithAggregatesFilter<"AjustesPlataforma"> | string
    texto_legal?: StringWithAggregatesFilter<"AjustesPlataforma"> | string
    nombre_plataforma?: StringWithAggregatesFilter<"AjustesPlataforma"> | string
    logo_url?: StringNullableWithAggregatesFilter<"AjustesPlataforma"> | string | null
    noticia_global?: StringWithAggregatesFilter<"AjustesPlataforma"> | string
    whatsapp_soporte?: StringWithAggregatesFilter<"AjustesPlataforma"> | string
  }

  export type ClickMarketplaceWhereInput = {
    AND?: ClickMarketplaceWhereInput | ClickMarketplaceWhereInput[]
    OR?: ClickMarketplaceWhereInput[]
    NOT?: ClickMarketplaceWhereInput | ClickMarketplaceWhereInput[]
    id?: StringFilter<"ClickMarketplace"> | string
    vendor_id?: StringFilter<"ClickMarketplace"> | string
    servicio_id?: StringFilter<"ClickMarketplace"> | string
    proveedor_id?: StringFilter<"ClickMarketplace"> | string
    creado_en?: DateTimeFilter<"ClickMarketplace"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    servicio?: XOR<ServicioBaseRelationFilter, ServicioBaseWhereInput>
  }

  export type ClickMarketplaceOrderByWithRelationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    proveedor_id?: SortOrder
    creado_en?: SortOrder
    vendor?: VendorOrderByWithRelationInput
    servicio?: ServicioBaseOrderByWithRelationInput
  }

  export type ClickMarketplaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClickMarketplaceWhereInput | ClickMarketplaceWhereInput[]
    OR?: ClickMarketplaceWhereInput[]
    NOT?: ClickMarketplaceWhereInput | ClickMarketplaceWhereInput[]
    vendor_id?: StringFilter<"ClickMarketplace"> | string
    servicio_id?: StringFilter<"ClickMarketplace"> | string
    proveedor_id?: StringFilter<"ClickMarketplace"> | string
    creado_en?: DateTimeFilter<"ClickMarketplace"> | Date | string
    vendor?: XOR<VendorRelationFilter, VendorWhereInput>
    servicio?: XOR<ServicioBaseRelationFilter, ServicioBaseWhereInput>
  }, "id">

  export type ClickMarketplaceOrderByWithAggregationInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    proveedor_id?: SortOrder
    creado_en?: SortOrder
    _count?: ClickMarketplaceCountOrderByAggregateInput
    _max?: ClickMarketplaceMaxOrderByAggregateInput
    _min?: ClickMarketplaceMinOrderByAggregateInput
  }

  export type ClickMarketplaceScalarWhereWithAggregatesInput = {
    AND?: ClickMarketplaceScalarWhereWithAggregatesInput | ClickMarketplaceScalarWhereWithAggregatesInput[]
    OR?: ClickMarketplaceScalarWhereWithAggregatesInput[]
    NOT?: ClickMarketplaceScalarWhereWithAggregatesInput | ClickMarketplaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClickMarketplace"> | string
    vendor_id?: StringWithAggregatesFilter<"ClickMarketplace"> | string
    servicio_id?: StringWithAggregatesFilter<"ClickMarketplace"> | string
    proveedor_id?: StringWithAggregatesFilter<"ClickMarketplace"> | string
    creado_en?: DateTimeWithAggregatesFilter<"ClickMarketplace"> | Date | string
  }

  export type VendorCreateInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    plan: PlanCreateNestedOneWithoutVendorsInput
    mis_servicios?: MiServicioCreateNestedManyWithoutVendorInput
    pedidos?: PedidoCreateNestedManyWithoutVendorInput
    pagos?: PagoCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    plan_id: string
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutVendorInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutVendorInput
    pagos?: PagoUncheckedCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseUncheckedCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutVendorsNestedInput
    mis_servicios?: MiServicioUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUpdateManyWithoutVendorNestedInput
    pagos?: PagoUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutVendorNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUncheckedUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateManyInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    plan_id: string
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
  }

  export type VendorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type VendorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateInput = {
    id?: string
    nombre: string
    precio: number
    dias: number
    tipo?: string
    limite_servicios?: number | null
    texto_limite?: string | null
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
    vendors?: VendorCreateNestedManyWithoutPlanInput
    pagos?: PagoCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    nombre: string
    precio: number
    dias: number
    tipo?: string
    limite_servicios?: number | null
    texto_limite?: string | null
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
    vendors?: VendorUncheckedCreateNestedManyWithoutPlanInput
    pagos?: PagoUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    dias?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    limite_servicios?: NullableIntFieldUpdateOperationsInput | number | null
    texto_limite?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos_automaticos?: BoolFieldUpdateOperationsInput | boolean
    enlace_publico?: BoolFieldUpdateOperationsInput | boolean
    marketplace_proveedor?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    vendors?: VendorUpdateManyWithoutPlanNestedInput
    pagos?: PagoUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    dias?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    limite_servicios?: NullableIntFieldUpdateOperationsInput | number | null
    texto_limite?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos_automaticos?: BoolFieldUpdateOperationsInput | boolean
    enlace_publico?: BoolFieldUpdateOperationsInput | boolean
    marketplace_proveedor?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    vendors?: VendorUncheckedUpdateManyWithoutPlanNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    nombre: string
    precio: number
    dias: number
    tipo?: string
    limite_servicios?: number | null
    texto_limite?: string | null
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    dias?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    limite_servicios?: NullableIntFieldUpdateOperationsInput | number | null
    texto_limite?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos_automaticos?: BoolFieldUpdateOperationsInput | boolean
    enlace_publico?: BoolFieldUpdateOperationsInput | boolean
    marketplace_proveedor?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    dias?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    limite_servicios?: NullableIntFieldUpdateOperationsInput | number | null
    texto_limite?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos_automaticos?: BoolFieldUpdateOperationsInput | boolean
    enlace_publico?: BoolFieldUpdateOperationsInput | boolean
    marketplace_proveedor?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EstrenoCreateInput = {
    id?: string
    titulo: string
    descripcion?: string | null
    plataforma: string
    fecha_estreno?: Date | string | null
    imagen_url?: string | null
    activo?: boolean
    creado_en?: Date | string
  }

  export type EstrenoUncheckedCreateInput = {
    id?: string
    titulo: string
    descripcion?: string | null
    plataforma: string
    fecha_estreno?: Date | string | null
    imagen_url?: string | null
    activo?: boolean
    creado_en?: Date | string
  }

  export type EstrenoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: StringFieldUpdateOperationsInput | string
    fecha_estreno?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstrenoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: StringFieldUpdateOperationsInput | string
    fecha_estreno?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstrenoCreateManyInput = {
    id?: string
    titulo: string
    descripcion?: string | null
    plataforma: string
    fecha_estreno?: Date | string | null
    imagen_url?: string | null
    activo?: boolean
    creado_en?: Date | string
  }

  export type EstrenoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: StringFieldUpdateOperationsInput | string
    fecha_estreno?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstrenoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    plataforma?: StringFieldUpdateOperationsInput | string
    fecha_estreno?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    imagen_url?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioBaseCreateInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    mis_servicios?: MiServicioCreateNestedManyWithoutServicioInput
    proveedor?: VendorCreateNestedOneWithoutServicios_aportadosInput
    clicks?: ClickMarketplaceCreateNestedManyWithoutServicioInput
    imagenes?: ImagenCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseUncheckedCreateInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    proveedor_id?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutServicioInput
    clicks?: ClickMarketplaceUncheckedCreateNestedManyWithoutServicioInput
    imagenes?: ImagenUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    mis_servicios?: MiServicioUpdateManyWithoutServicioNestedInput
    proveedor?: VendorUpdateOneWithoutServicios_aportadosNestedInput
    clicks?: ClickMarketplaceUpdateManyWithoutServicioNestedInput
    imagenes?: ImagenUpdateManyWithoutServicioNestedInput
  }

  export type ServicioBaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor_id?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutServicioNestedInput
    clicks?: ClickMarketplaceUncheckedUpdateManyWithoutServicioNestedInput
    imagenes?: ImagenUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioBaseCreateManyInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    proveedor_id?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
  }

  export type ServicioBaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ServicioBaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor_id?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MiServicioCreateInput = {
    id?: string
    precio_venta: number
    activo?: boolean
    creado_en?: Date | string
    vendor: VendorCreateNestedOneWithoutMis_serviciosInput
    servicio: ServicioBaseCreateNestedOneWithoutMis_serviciosInput
  }

  export type MiServicioUncheckedCreateInput = {
    id?: string
    vendor_id: string
    servicio_id: string
    precio_venta: number
    activo?: boolean
    creado_en?: Date | string
  }

  export type MiServicioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutMis_serviciosNestedInput
    servicio?: ServicioBaseUpdateOneRequiredWithoutMis_serviciosNestedInput
  }

  export type MiServicioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiServicioCreateManyInput = {
    id?: string
    vendor_id: string
    servicio_id: string
    precio_venta: number
    activo?: boolean
    creado_en?: Date | string
  }

  export type MiServicioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiServicioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagenCreateInput = {
    id?: string
    titulo: string
    public_id: string
    url_base: string
    etiquetas: string
    categoria?: string
    activo?: boolean
    creado_en?: Date | string
    servicio?: ServicioBaseCreateNestedOneWithoutImagenesInput
  }

  export type ImagenUncheckedCreateInput = {
    id?: string
    titulo: string
    public_id: string
    url_base: string
    etiquetas: string
    categoria?: string
    activo?: boolean
    creado_en?: Date | string
    servicio_id?: string | null
  }

  export type ImagenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    etiquetas?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    servicio?: ServicioBaseUpdateOneWithoutImagenesNestedInput
  }

  export type ImagenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    etiquetas?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    servicio_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ImagenCreateManyInput = {
    id?: string
    titulo: string
    public_id: string
    url_base: string
    etiquetas: string
    categoria?: string
    activo?: boolean
    creado_en?: Date | string
    servicio_id?: string | null
  }

  export type ImagenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    etiquetas?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    etiquetas?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    servicio_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PartidoCreateInput = {
    id?: string
    fecha: Date | string
    hora: string
    equipo_local: string
    equipo_visita: string
    logo_local?: string | null
    logo_visita?: string | null
    canal: string
    liga?: string | null
    requiere_iptv?: boolean
    push_enviado?: boolean
    activo?: boolean
  }

  export type PartidoUncheckedCreateInput = {
    id?: string
    fecha: Date | string
    hora: string
    equipo_local: string
    equipo_visita: string
    logo_local?: string | null
    logo_visita?: string | null
    canal: string
    liga?: string | null
    requiere_iptv?: boolean
    push_enviado?: boolean
    activo?: boolean
  }

  export type PartidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    equipo_local?: StringFieldUpdateOperationsInput | string
    equipo_visita?: StringFieldUpdateOperationsInput | string
    logo_local?: NullableStringFieldUpdateOperationsInput | string | null
    logo_visita?: NullableStringFieldUpdateOperationsInput | string | null
    canal?: StringFieldUpdateOperationsInput | string
    liga?: NullableStringFieldUpdateOperationsInput | string | null
    requiere_iptv?: BoolFieldUpdateOperationsInput | boolean
    push_enviado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    equipo_local?: StringFieldUpdateOperationsInput | string
    equipo_visita?: StringFieldUpdateOperationsInput | string
    logo_local?: NullableStringFieldUpdateOperationsInput | string | null
    logo_visita?: NullableStringFieldUpdateOperationsInput | string | null
    canal?: StringFieldUpdateOperationsInput | string
    liga?: NullableStringFieldUpdateOperationsInput | string | null
    requiere_iptv?: BoolFieldUpdateOperationsInput | boolean
    push_enviado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartidoCreateManyInput = {
    id?: string
    fecha: Date | string
    hora: string
    equipo_local: string
    equipo_visita: string
    logo_local?: string | null
    logo_visita?: string | null
    canal: string
    liga?: string | null
    requiere_iptv?: boolean
    push_enviado?: boolean
    activo?: boolean
  }

  export type PartidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    equipo_local?: StringFieldUpdateOperationsInput | string
    equipo_visita?: StringFieldUpdateOperationsInput | string
    logo_local?: NullableStringFieldUpdateOperationsInput | string | null
    logo_visita?: NullableStringFieldUpdateOperationsInput | string | null
    canal?: StringFieldUpdateOperationsInput | string
    liga?: NullableStringFieldUpdateOperationsInput | string | null
    requiere_iptv?: BoolFieldUpdateOperationsInput | boolean
    push_enviado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PartidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    hora?: StringFieldUpdateOperationsInput | string
    equipo_local?: StringFieldUpdateOperationsInput | string
    equipo_visita?: StringFieldUpdateOperationsInput | string
    logo_local?: NullableStringFieldUpdateOperationsInput | string | null
    logo_visita?: NullableStringFieldUpdateOperationsInput | string | null
    canal?: StringFieldUpdateOperationsInput | string
    liga?: NullableStringFieldUpdateOperationsInput | string | null
    requiere_iptv?: BoolFieldUpdateOperationsInput | boolean
    push_enviado?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensajeRapidoCreateInput = {
    id?: string
    titulo: string
    template: string
    orden: number
    activo?: boolean
  }

  export type MensajeRapidoUncheckedCreateInput = {
    id?: string
    titulo: string
    template: string
    orden: number
    activo?: boolean
  }

  export type MensajeRapidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensajeRapidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensajeRapidoCreateManyInput = {
    id?: string
    titulo: string
    template: string
    orden: number
    activo?: boolean
  }

  export type MensajeRapidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MensajeRapidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    template?: StringFieldUpdateOperationsInput | string
    orden?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PedidoCreateInput = {
    id?: string
    servicio_id: string
    notas?: string | null
    status?: string
    creado_en?: Date | string
    vendor: VendorCreateNestedOneWithoutPedidosInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: string
    vendor_id: string
    servicio_id: string
    notas?: string | null
    status?: string
    creado_en?: Date | string
  }

  export type PedidoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoCreateManyInput = {
    id?: string
    vendor_id: string
    servicio_id: string
    notas?: string | null
    status?: string
    creado_en?: Date | string
  }

  export type PedidoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoCreateInput = {
    id?: string
    monto: number
    comprobante_url?: string | null
    status?: string
    confirmado_en?: Date | string | null
    notas_admin?: string | null
    creado_en?: Date | string
    vendor: VendorCreateNestedOneWithoutPagosInput
    plan: PlanCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateInput = {
    id?: string
    vendor_id: string
    monto: number
    plan_id: string
    comprobante_url?: string | null
    status?: string
    confirmado_en?: Date | string | null
    notas_admin?: string | null
    creado_en?: Date | string
  }

  export type PagoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutPagosNestedInput
    plan?: PlanUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    plan_id?: StringFieldUpdateOperationsInput | string
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoCreateManyInput = {
    id?: string
    vendor_id: string
    monto: number
    plan_id: string
    comprobante_url?: string | null
    status?: string
    confirmado_en?: Date | string | null
    notas_admin?: string | null
    creado_en?: Date | string
  }

  export type PagoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    plan_id?: StringFieldUpdateOperationsInput | string
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AjustesPlataformaCreateInput = {
    id?: string
    qr_cobro_url?: string
    tigo_money_numero?: string
    texto_legal?: string
    nombre_plataforma?: string
    logo_url?: string | null
    noticia_global?: string
    whatsapp_soporte?: string
  }

  export type AjustesPlataformaUncheckedCreateInput = {
    id?: string
    qr_cobro_url?: string
    tigo_money_numero?: string
    texto_legal?: string
    nombre_plataforma?: string
    logo_url?: string | null
    noticia_global?: string
    whatsapp_soporte?: string
  }

  export type AjustesPlataformaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_cobro_url?: StringFieldUpdateOperationsInput | string
    tigo_money_numero?: StringFieldUpdateOperationsInput | string
    texto_legal?: StringFieldUpdateOperationsInput | string
    nombre_plataforma?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    noticia_global?: StringFieldUpdateOperationsInput | string
    whatsapp_soporte?: StringFieldUpdateOperationsInput | string
  }

  export type AjustesPlataformaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_cobro_url?: StringFieldUpdateOperationsInput | string
    tigo_money_numero?: StringFieldUpdateOperationsInput | string
    texto_legal?: StringFieldUpdateOperationsInput | string
    nombre_plataforma?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    noticia_global?: StringFieldUpdateOperationsInput | string
    whatsapp_soporte?: StringFieldUpdateOperationsInput | string
  }

  export type AjustesPlataformaCreateManyInput = {
    id?: string
    qr_cobro_url?: string
    tigo_money_numero?: string
    texto_legal?: string
    nombre_plataforma?: string
    logo_url?: string | null
    noticia_global?: string
    whatsapp_soporte?: string
  }

  export type AjustesPlataformaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_cobro_url?: StringFieldUpdateOperationsInput | string
    tigo_money_numero?: StringFieldUpdateOperationsInput | string
    texto_legal?: StringFieldUpdateOperationsInput | string
    nombre_plataforma?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    noticia_global?: StringFieldUpdateOperationsInput | string
    whatsapp_soporte?: StringFieldUpdateOperationsInput | string
  }

  export type AjustesPlataformaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    qr_cobro_url?: StringFieldUpdateOperationsInput | string
    tigo_money_numero?: StringFieldUpdateOperationsInput | string
    texto_legal?: StringFieldUpdateOperationsInput | string
    nombre_plataforma?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    noticia_global?: StringFieldUpdateOperationsInput | string
    whatsapp_soporte?: StringFieldUpdateOperationsInput | string
  }

  export type ClickMarketplaceCreateInput = {
    id?: string
    proveedor_id: string
    creado_en?: Date | string
    vendor: VendorCreateNestedOneWithoutClicks_marketplaceInput
    servicio: ServicioBaseCreateNestedOneWithoutClicksInput
  }

  export type ClickMarketplaceUncheckedCreateInput = {
    id?: string
    vendor_id: string
    servicio_id: string
    proveedor_id: string
    creado_en?: Date | string
  }

  export type ClickMarketplaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutClicks_marketplaceNestedInput
    servicio?: ServicioBaseUpdateOneRequiredWithoutClicksNestedInput
  }

  export type ClickMarketplaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickMarketplaceCreateManyInput = {
    id?: string
    vendor_id: string
    servicio_id: string
    proveedor_id: string
    creado_en?: Date | string
  }

  export type ClickMarketplaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickMarketplaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PlanRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type MiServicioListRelationFilter = {
    every?: MiServicioWhereInput
    some?: MiServicioWhereInput
    none?: MiServicioWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type PagoListRelationFilter = {
    every?: PagoWhereInput
    some?: PagoWhereInput
    none?: PagoWhereInput
  }

  export type ServicioBaseListRelationFilter = {
    every?: ServicioBaseWhereInput
    some?: ServicioBaseWhereInput
    none?: ServicioBaseWhereInput
  }

  export type ClickMarketplaceListRelationFilter = {
    every?: ClickMarketplaceWhereInput
    some?: ClickMarketplaceWhereInput
    none?: ClickMarketplaceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MiServicioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicioBaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClickMarketplaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VendorCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    alias?: SortOrder
    telefono?: SortOrder
    password_hash?: SortOrder
    logo_url?: SortOrder
    logo_cloudinary_id?: SortOrder
    whatsapp?: SortOrder
    plan_id?: SortOrder
    fecha_registro?: SortOrder
    fecha_vencimiento?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    biografia?: SortOrder
    role?: SortOrder
  }

  export type VendorAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type VendorMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    alias?: SortOrder
    telefono?: SortOrder
    password_hash?: SortOrder
    logo_url?: SortOrder
    logo_cloudinary_id?: SortOrder
    whatsapp?: SortOrder
    plan_id?: SortOrder
    fecha_registro?: SortOrder
    fecha_vencimiento?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    biografia?: SortOrder
    role?: SortOrder
  }

  export type VendorMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    alias?: SortOrder
    telefono?: SortOrder
    password_hash?: SortOrder
    logo_url?: SortOrder
    logo_cloudinary_id?: SortOrder
    whatsapp?: SortOrder
    plan_id?: SortOrder
    fecha_registro?: SortOrder
    fecha_vencimiento?: SortOrder
    status?: SortOrder
    rating?: SortOrder
    biografia?: SortOrder
    role?: SortOrder
  }

  export type VendorSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VendorListRelationFilter = {
    every?: VendorWhereInput
    some?: VendorWhereInput
    none?: VendorWhereInput
  }

  export type VendorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    dias?: SortOrder
    tipo?: SortOrder
    limite_servicios?: SortOrder
    texto_limite?: SortOrder
    pedidos_automaticos?: SortOrder
    enlace_publico?: SortOrder
    marketplace_proveedor?: SortOrder
    activo?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    precio?: SortOrder
    dias?: SortOrder
    limite_servicios?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    dias?: SortOrder
    tipo?: SortOrder
    limite_servicios?: SortOrder
    texto_limite?: SortOrder
    pedidos_automaticos?: SortOrder
    enlace_publico?: SortOrder
    marketplace_proveedor?: SortOrder
    activo?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    dias?: SortOrder
    tipo?: SortOrder
    limite_servicios?: SortOrder
    texto_limite?: SortOrder
    pedidos_automaticos?: SortOrder
    enlace_publico?: SortOrder
    marketplace_proveedor?: SortOrder
    activo?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    precio?: SortOrder
    dias?: SortOrder
    limite_servicios?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EstrenoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    plataforma?: SortOrder
    fecha_estreno?: SortOrder
    imagen_url?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type EstrenoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    plataforma?: SortOrder
    fecha_estreno?: SortOrder
    imagen_url?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type EstrenoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    descripcion?: SortOrder
    plataforma?: SortOrder
    fecha_estreno?: SortOrder
    imagen_url?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VendorNullableRelationFilter = {
    is?: VendorWhereInput | null
    isNot?: VendorWhereInput | null
  }

  export type ImagenListRelationFilter = {
    every?: ImagenWhereInput
    some?: ImagenWhereInput
    none?: ImagenWhereInput
  }

  export type ImagenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicioBaseCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    logo_url?: SortOrder
    descripcion_base?: SortOrder
    precio_sugerido?: SortOrder
    categoria?: SortOrder
    es_iptv_propio?: SortOrder
    estado_actual?: SortOrder
    nota_estado?: SortOrder
    proveedor_id?: SortOrder
    comision_pct?: SortOrder
    estado_aprobacion?: SortOrder
    activo?: SortOrder
  }

  export type ServicioBaseAvgOrderByAggregateInput = {
    precio_sugerido?: SortOrder
    comision_pct?: SortOrder
  }

  export type ServicioBaseMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    logo_url?: SortOrder
    descripcion_base?: SortOrder
    precio_sugerido?: SortOrder
    categoria?: SortOrder
    es_iptv_propio?: SortOrder
    estado_actual?: SortOrder
    nota_estado?: SortOrder
    proveedor_id?: SortOrder
    comision_pct?: SortOrder
    estado_aprobacion?: SortOrder
    activo?: SortOrder
  }

  export type ServicioBaseMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    logo_url?: SortOrder
    descripcion_base?: SortOrder
    precio_sugerido?: SortOrder
    categoria?: SortOrder
    es_iptv_propio?: SortOrder
    estado_actual?: SortOrder
    nota_estado?: SortOrder
    proveedor_id?: SortOrder
    comision_pct?: SortOrder
    estado_aprobacion?: SortOrder
    activo?: SortOrder
  }

  export type ServicioBaseSumOrderByAggregateInput = {
    precio_sugerido?: SortOrder
    comision_pct?: SortOrder
  }

  export type VendorRelationFilter = {
    is?: VendorWhereInput
    isNot?: VendorWhereInput
  }

  export type ServicioBaseRelationFilter = {
    is?: ServicioBaseWhereInput
    isNot?: ServicioBaseWhereInput
  }

  export type MiServicioVendor_idServicio_idCompoundUniqueInput = {
    vendor_id: string
    servicio_id: string
  }

  export type MiServicioCountOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    precio_venta?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type MiServicioAvgOrderByAggregateInput = {
    precio_venta?: SortOrder
  }

  export type MiServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    precio_venta?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type MiServicioMinOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    precio_venta?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
  }

  export type MiServicioSumOrderByAggregateInput = {
    precio_venta?: SortOrder
  }

  export type ServicioBaseNullableRelationFilter = {
    is?: ServicioBaseWhereInput | null
    isNot?: ServicioBaseWhereInput | null
  }

  export type ImagenCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    public_id?: SortOrder
    url_base?: SortOrder
    etiquetas?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    servicio_id?: SortOrder
  }

  export type ImagenMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    public_id?: SortOrder
    url_base?: SortOrder
    etiquetas?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    servicio_id?: SortOrder
  }

  export type ImagenMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    public_id?: SortOrder
    url_base?: SortOrder
    etiquetas?: SortOrder
    categoria?: SortOrder
    activo?: SortOrder
    creado_en?: SortOrder
    servicio_id?: SortOrder
  }

  export type PartidoCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    equipo_local?: SortOrder
    equipo_visita?: SortOrder
    logo_local?: SortOrder
    logo_visita?: SortOrder
    canal?: SortOrder
    liga?: SortOrder
    requiere_iptv?: SortOrder
    push_enviado?: SortOrder
    activo?: SortOrder
  }

  export type PartidoMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    equipo_local?: SortOrder
    equipo_visita?: SortOrder
    logo_local?: SortOrder
    logo_visita?: SortOrder
    canal?: SortOrder
    liga?: SortOrder
    requiere_iptv?: SortOrder
    push_enviado?: SortOrder
    activo?: SortOrder
  }

  export type PartidoMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    hora?: SortOrder
    equipo_local?: SortOrder
    equipo_visita?: SortOrder
    logo_local?: SortOrder
    logo_visita?: SortOrder
    canal?: SortOrder
    liga?: SortOrder
    requiere_iptv?: SortOrder
    push_enviado?: SortOrder
    activo?: SortOrder
  }

  export type MensajeRapidoCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    template?: SortOrder
    orden?: SortOrder
    activo?: SortOrder
  }

  export type MensajeRapidoAvgOrderByAggregateInput = {
    orden?: SortOrder
  }

  export type MensajeRapidoMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    template?: SortOrder
    orden?: SortOrder
    activo?: SortOrder
  }

  export type MensajeRapidoMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    template?: SortOrder
    orden?: SortOrder
    activo?: SortOrder
  }

  export type MensajeRapidoSumOrderByAggregateInput = {
    orden?: SortOrder
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    notas?: SortOrder
    status?: SortOrder
    creado_en?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    notas?: SortOrder
    status?: SortOrder
    creado_en?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    notas?: SortOrder
    status?: SortOrder
    creado_en?: SortOrder
  }

  export type PagoCountOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    monto?: SortOrder
    plan_id?: SortOrder
    comprobante_url?: SortOrder
    status?: SortOrder
    confirmado_en?: SortOrder
    notas_admin?: SortOrder
    creado_en?: SortOrder
  }

  export type PagoAvgOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type PagoMaxOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    monto?: SortOrder
    plan_id?: SortOrder
    comprobante_url?: SortOrder
    status?: SortOrder
    confirmado_en?: SortOrder
    notas_admin?: SortOrder
    creado_en?: SortOrder
  }

  export type PagoMinOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    monto?: SortOrder
    plan_id?: SortOrder
    comprobante_url?: SortOrder
    status?: SortOrder
    confirmado_en?: SortOrder
    notas_admin?: SortOrder
    creado_en?: SortOrder
  }

  export type PagoSumOrderByAggregateInput = {
    monto?: SortOrder
  }

  export type AjustesPlataformaCountOrderByAggregateInput = {
    id?: SortOrder
    qr_cobro_url?: SortOrder
    tigo_money_numero?: SortOrder
    texto_legal?: SortOrder
    nombre_plataforma?: SortOrder
    logo_url?: SortOrder
    noticia_global?: SortOrder
    whatsapp_soporte?: SortOrder
  }

  export type AjustesPlataformaMaxOrderByAggregateInput = {
    id?: SortOrder
    qr_cobro_url?: SortOrder
    tigo_money_numero?: SortOrder
    texto_legal?: SortOrder
    nombre_plataforma?: SortOrder
    logo_url?: SortOrder
    noticia_global?: SortOrder
    whatsapp_soporte?: SortOrder
  }

  export type AjustesPlataformaMinOrderByAggregateInput = {
    id?: SortOrder
    qr_cobro_url?: SortOrder
    tigo_money_numero?: SortOrder
    texto_legal?: SortOrder
    nombre_plataforma?: SortOrder
    logo_url?: SortOrder
    noticia_global?: SortOrder
    whatsapp_soporte?: SortOrder
  }

  export type ClickMarketplaceCountOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    proveedor_id?: SortOrder
    creado_en?: SortOrder
  }

  export type ClickMarketplaceMaxOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    proveedor_id?: SortOrder
    creado_en?: SortOrder
  }

  export type ClickMarketplaceMinOrderByAggregateInput = {
    id?: SortOrder
    vendor_id?: SortOrder
    servicio_id?: SortOrder
    proveedor_id?: SortOrder
    creado_en?: SortOrder
  }

  export type PlanCreateNestedOneWithoutVendorsInput = {
    create?: XOR<PlanCreateWithoutVendorsInput, PlanUncheckedCreateWithoutVendorsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutVendorsInput
    connect?: PlanWhereUniqueInput
  }

  export type MiServicioCreateNestedManyWithoutVendorInput = {
    create?: XOR<MiServicioCreateWithoutVendorInput, MiServicioUncheckedCreateWithoutVendorInput> | MiServicioCreateWithoutVendorInput[] | MiServicioUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MiServicioCreateOrConnectWithoutVendorInput | MiServicioCreateOrConnectWithoutVendorInput[]
    createMany?: MiServicioCreateManyVendorInputEnvelope
    connect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutVendorInput = {
    create?: XOR<PedidoCreateWithoutVendorInput, PedidoUncheckedCreateWithoutVendorInput> | PedidoCreateWithoutVendorInput[] | PedidoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutVendorInput | PedidoCreateOrConnectWithoutVendorInput[]
    createMany?: PedidoCreateManyVendorInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PagoCreateNestedManyWithoutVendorInput = {
    create?: XOR<PagoCreateWithoutVendorInput, PagoUncheckedCreateWithoutVendorInput> | PagoCreateWithoutVendorInput[] | PagoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutVendorInput | PagoCreateOrConnectWithoutVendorInput[]
    createMany?: PagoCreateManyVendorInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type ServicioBaseCreateNestedManyWithoutProveedorInput = {
    create?: XOR<ServicioBaseCreateWithoutProveedorInput, ServicioBaseUncheckedCreateWithoutProveedorInput> | ServicioBaseCreateWithoutProveedorInput[] | ServicioBaseUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutProveedorInput | ServicioBaseCreateOrConnectWithoutProveedorInput[]
    createMany?: ServicioBaseCreateManyProveedorInputEnvelope
    connect?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
  }

  export type ClickMarketplaceCreateNestedManyWithoutVendorInput = {
    create?: XOR<ClickMarketplaceCreateWithoutVendorInput, ClickMarketplaceUncheckedCreateWithoutVendorInput> | ClickMarketplaceCreateWithoutVendorInput[] | ClickMarketplaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ClickMarketplaceCreateOrConnectWithoutVendorInput | ClickMarketplaceCreateOrConnectWithoutVendorInput[]
    createMany?: ClickMarketplaceCreateManyVendorInputEnvelope
    connect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
  }

  export type MiServicioUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<MiServicioCreateWithoutVendorInput, MiServicioUncheckedCreateWithoutVendorInput> | MiServicioCreateWithoutVendorInput[] | MiServicioUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MiServicioCreateOrConnectWithoutVendorInput | MiServicioCreateOrConnectWithoutVendorInput[]
    createMany?: MiServicioCreateManyVendorInputEnvelope
    connect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<PedidoCreateWithoutVendorInput, PedidoUncheckedCreateWithoutVendorInput> | PedidoCreateWithoutVendorInput[] | PedidoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutVendorInput | PedidoCreateOrConnectWithoutVendorInput[]
    createMany?: PedidoCreateManyVendorInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<PagoCreateWithoutVendorInput, PagoUncheckedCreateWithoutVendorInput> | PagoCreateWithoutVendorInput[] | PagoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutVendorInput | PagoCreateOrConnectWithoutVendorInput[]
    createMany?: PagoCreateManyVendorInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type ServicioBaseUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: XOR<ServicioBaseCreateWithoutProveedorInput, ServicioBaseUncheckedCreateWithoutProveedorInput> | ServicioBaseCreateWithoutProveedorInput[] | ServicioBaseUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutProveedorInput | ServicioBaseCreateOrConnectWithoutProveedorInput[]
    createMany?: ServicioBaseCreateManyProveedorInputEnvelope
    connect?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
  }

  export type ClickMarketplaceUncheckedCreateNestedManyWithoutVendorInput = {
    create?: XOR<ClickMarketplaceCreateWithoutVendorInput, ClickMarketplaceUncheckedCreateWithoutVendorInput> | ClickMarketplaceCreateWithoutVendorInput[] | ClickMarketplaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ClickMarketplaceCreateOrConnectWithoutVendorInput | ClickMarketplaceCreateOrConnectWithoutVendorInput[]
    createMany?: ClickMarketplaceCreateManyVendorInputEnvelope
    connect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlanUpdateOneRequiredWithoutVendorsNestedInput = {
    create?: XOR<PlanCreateWithoutVendorsInput, PlanUncheckedCreateWithoutVendorsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutVendorsInput
    upsert?: PlanUpsertWithoutVendorsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutVendorsInput, PlanUpdateWithoutVendorsInput>, PlanUncheckedUpdateWithoutVendorsInput>
  }

  export type MiServicioUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MiServicioCreateWithoutVendorInput, MiServicioUncheckedCreateWithoutVendorInput> | MiServicioCreateWithoutVendorInput[] | MiServicioUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MiServicioCreateOrConnectWithoutVendorInput | MiServicioCreateOrConnectWithoutVendorInput[]
    upsert?: MiServicioUpsertWithWhereUniqueWithoutVendorInput | MiServicioUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MiServicioCreateManyVendorInputEnvelope
    set?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    disconnect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    delete?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    connect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    update?: MiServicioUpdateWithWhereUniqueWithoutVendorInput | MiServicioUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MiServicioUpdateManyWithWhereWithoutVendorInput | MiServicioUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MiServicioScalarWhereInput | MiServicioScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PedidoCreateWithoutVendorInput, PedidoUncheckedCreateWithoutVendorInput> | PedidoCreateWithoutVendorInput[] | PedidoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutVendorInput | PedidoCreateOrConnectWithoutVendorInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutVendorInput | PedidoUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PedidoCreateManyVendorInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutVendorInput | PedidoUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutVendorInput | PedidoUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PagoUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PagoCreateWithoutVendorInput, PagoUncheckedCreateWithoutVendorInput> | PagoCreateWithoutVendorInput[] | PagoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutVendorInput | PagoCreateOrConnectWithoutVendorInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutVendorInput | PagoUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PagoCreateManyVendorInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutVendorInput | PagoUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutVendorInput | PagoUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type ServicioBaseUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<ServicioBaseCreateWithoutProveedorInput, ServicioBaseUncheckedCreateWithoutProveedorInput> | ServicioBaseCreateWithoutProveedorInput[] | ServicioBaseUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutProveedorInput | ServicioBaseCreateOrConnectWithoutProveedorInput[]
    upsert?: ServicioBaseUpsertWithWhereUniqueWithoutProveedorInput | ServicioBaseUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: ServicioBaseCreateManyProveedorInputEnvelope
    set?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
    disconnect?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
    delete?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
    connect?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
    update?: ServicioBaseUpdateWithWhereUniqueWithoutProveedorInput | ServicioBaseUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: ServicioBaseUpdateManyWithWhereWithoutProveedorInput | ServicioBaseUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: ServicioBaseScalarWhereInput | ServicioBaseScalarWhereInput[]
  }

  export type ClickMarketplaceUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ClickMarketplaceCreateWithoutVendorInput, ClickMarketplaceUncheckedCreateWithoutVendorInput> | ClickMarketplaceCreateWithoutVendorInput[] | ClickMarketplaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ClickMarketplaceCreateOrConnectWithoutVendorInput | ClickMarketplaceCreateOrConnectWithoutVendorInput[]
    upsert?: ClickMarketplaceUpsertWithWhereUniqueWithoutVendorInput | ClickMarketplaceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ClickMarketplaceCreateManyVendorInputEnvelope
    set?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    disconnect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    delete?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    connect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    update?: ClickMarketplaceUpdateWithWhereUniqueWithoutVendorInput | ClickMarketplaceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ClickMarketplaceUpdateManyWithWhereWithoutVendorInput | ClickMarketplaceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ClickMarketplaceScalarWhereInput | ClickMarketplaceScalarWhereInput[]
  }

  export type MiServicioUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<MiServicioCreateWithoutVendorInput, MiServicioUncheckedCreateWithoutVendorInput> | MiServicioCreateWithoutVendorInput[] | MiServicioUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: MiServicioCreateOrConnectWithoutVendorInput | MiServicioCreateOrConnectWithoutVendorInput[]
    upsert?: MiServicioUpsertWithWhereUniqueWithoutVendorInput | MiServicioUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: MiServicioCreateManyVendorInputEnvelope
    set?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    disconnect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    delete?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    connect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    update?: MiServicioUpdateWithWhereUniqueWithoutVendorInput | MiServicioUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: MiServicioUpdateManyWithWhereWithoutVendorInput | MiServicioUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: MiServicioScalarWhereInput | MiServicioScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PedidoCreateWithoutVendorInput, PedidoUncheckedCreateWithoutVendorInput> | PedidoCreateWithoutVendorInput[] | PedidoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutVendorInput | PedidoCreateOrConnectWithoutVendorInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutVendorInput | PedidoUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PedidoCreateManyVendorInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutVendorInput | PedidoUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutVendorInput | PedidoUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<PagoCreateWithoutVendorInput, PagoUncheckedCreateWithoutVendorInput> | PagoCreateWithoutVendorInput[] | PagoUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutVendorInput | PagoCreateOrConnectWithoutVendorInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutVendorInput | PagoUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: PagoCreateManyVendorInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutVendorInput | PagoUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutVendorInput | PagoUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type ServicioBaseUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<ServicioBaseCreateWithoutProveedorInput, ServicioBaseUncheckedCreateWithoutProveedorInput> | ServicioBaseCreateWithoutProveedorInput[] | ServicioBaseUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutProveedorInput | ServicioBaseCreateOrConnectWithoutProveedorInput[]
    upsert?: ServicioBaseUpsertWithWhereUniqueWithoutProveedorInput | ServicioBaseUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: ServicioBaseCreateManyProveedorInputEnvelope
    set?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
    disconnect?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
    delete?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
    connect?: ServicioBaseWhereUniqueInput | ServicioBaseWhereUniqueInput[]
    update?: ServicioBaseUpdateWithWhereUniqueWithoutProveedorInput | ServicioBaseUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: ServicioBaseUpdateManyWithWhereWithoutProveedorInput | ServicioBaseUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: ServicioBaseScalarWhereInput | ServicioBaseScalarWhereInput[]
  }

  export type ClickMarketplaceUncheckedUpdateManyWithoutVendorNestedInput = {
    create?: XOR<ClickMarketplaceCreateWithoutVendorInput, ClickMarketplaceUncheckedCreateWithoutVendorInput> | ClickMarketplaceCreateWithoutVendorInput[] | ClickMarketplaceUncheckedCreateWithoutVendorInput[]
    connectOrCreate?: ClickMarketplaceCreateOrConnectWithoutVendorInput | ClickMarketplaceCreateOrConnectWithoutVendorInput[]
    upsert?: ClickMarketplaceUpsertWithWhereUniqueWithoutVendorInput | ClickMarketplaceUpsertWithWhereUniqueWithoutVendorInput[]
    createMany?: ClickMarketplaceCreateManyVendorInputEnvelope
    set?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    disconnect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    delete?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    connect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    update?: ClickMarketplaceUpdateWithWhereUniqueWithoutVendorInput | ClickMarketplaceUpdateWithWhereUniqueWithoutVendorInput[]
    updateMany?: ClickMarketplaceUpdateManyWithWhereWithoutVendorInput | ClickMarketplaceUpdateManyWithWhereWithoutVendorInput[]
    deleteMany?: ClickMarketplaceScalarWhereInput | ClickMarketplaceScalarWhereInput[]
  }

  export type VendorCreateNestedManyWithoutPlanInput = {
    create?: XOR<VendorCreateWithoutPlanInput, VendorUncheckedCreateWithoutPlanInput> | VendorCreateWithoutPlanInput[] | VendorUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutPlanInput | VendorCreateOrConnectWithoutPlanInput[]
    createMany?: VendorCreateManyPlanInputEnvelope
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
  }

  export type PagoCreateNestedManyWithoutPlanInput = {
    create?: XOR<PagoCreateWithoutPlanInput, PagoUncheckedCreateWithoutPlanInput> | PagoCreateWithoutPlanInput[] | PagoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutPlanInput | PagoCreateOrConnectWithoutPlanInput[]
    createMany?: PagoCreateManyPlanInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type VendorUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<VendorCreateWithoutPlanInput, VendorUncheckedCreateWithoutPlanInput> | VendorCreateWithoutPlanInput[] | VendorUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutPlanInput | VendorCreateOrConnectWithoutPlanInput[]
    createMany?: VendorCreateManyPlanInputEnvelope
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<PagoCreateWithoutPlanInput, PagoUncheckedCreateWithoutPlanInput> | PagoCreateWithoutPlanInput[] | PagoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutPlanInput | PagoCreateOrConnectWithoutPlanInput[]
    createMany?: PagoCreateManyPlanInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VendorUpdateManyWithoutPlanNestedInput = {
    create?: XOR<VendorCreateWithoutPlanInput, VendorUncheckedCreateWithoutPlanInput> | VendorCreateWithoutPlanInput[] | VendorUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutPlanInput | VendorCreateOrConnectWithoutPlanInput[]
    upsert?: VendorUpsertWithWhereUniqueWithoutPlanInput | VendorUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: VendorCreateManyPlanInputEnvelope
    set?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    disconnect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    delete?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    update?: VendorUpdateWithWhereUniqueWithoutPlanInput | VendorUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: VendorUpdateManyWithWhereWithoutPlanInput | VendorUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: VendorScalarWhereInput | VendorScalarWhereInput[]
  }

  export type PagoUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PagoCreateWithoutPlanInput, PagoUncheckedCreateWithoutPlanInput> | PagoCreateWithoutPlanInput[] | PagoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutPlanInput | PagoCreateOrConnectWithoutPlanInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutPlanInput | PagoUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PagoCreateManyPlanInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutPlanInput | PagoUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutPlanInput | PagoUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type VendorUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<VendorCreateWithoutPlanInput, VendorUncheckedCreateWithoutPlanInput> | VendorCreateWithoutPlanInput[] | VendorUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: VendorCreateOrConnectWithoutPlanInput | VendorCreateOrConnectWithoutPlanInput[]
    upsert?: VendorUpsertWithWhereUniqueWithoutPlanInput | VendorUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: VendorCreateManyPlanInputEnvelope
    set?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    disconnect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    delete?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    connect?: VendorWhereUniqueInput | VendorWhereUniqueInput[]
    update?: VendorUpdateWithWhereUniqueWithoutPlanInput | VendorUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: VendorUpdateManyWithWhereWithoutPlanInput | VendorUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: VendorScalarWhereInput | VendorScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<PagoCreateWithoutPlanInput, PagoUncheckedCreateWithoutPlanInput> | PagoCreateWithoutPlanInput[] | PagoUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutPlanInput | PagoCreateOrConnectWithoutPlanInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutPlanInput | PagoUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: PagoCreateManyPlanInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutPlanInput | PagoUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutPlanInput | PagoUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MiServicioCreateNestedManyWithoutServicioInput = {
    create?: XOR<MiServicioCreateWithoutServicioInput, MiServicioUncheckedCreateWithoutServicioInput> | MiServicioCreateWithoutServicioInput[] | MiServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: MiServicioCreateOrConnectWithoutServicioInput | MiServicioCreateOrConnectWithoutServicioInput[]
    createMany?: MiServicioCreateManyServicioInputEnvelope
    connect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
  }

  export type VendorCreateNestedOneWithoutServicios_aportadosInput = {
    create?: XOR<VendorCreateWithoutServicios_aportadosInput, VendorUncheckedCreateWithoutServicios_aportadosInput>
    connectOrCreate?: VendorCreateOrConnectWithoutServicios_aportadosInput
    connect?: VendorWhereUniqueInput
  }

  export type ClickMarketplaceCreateNestedManyWithoutServicioInput = {
    create?: XOR<ClickMarketplaceCreateWithoutServicioInput, ClickMarketplaceUncheckedCreateWithoutServicioInput> | ClickMarketplaceCreateWithoutServicioInput[] | ClickMarketplaceUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ClickMarketplaceCreateOrConnectWithoutServicioInput | ClickMarketplaceCreateOrConnectWithoutServicioInput[]
    createMany?: ClickMarketplaceCreateManyServicioInputEnvelope
    connect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
  }

  export type ImagenCreateNestedManyWithoutServicioInput = {
    create?: XOR<ImagenCreateWithoutServicioInput, ImagenUncheckedCreateWithoutServicioInput> | ImagenCreateWithoutServicioInput[] | ImagenUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ImagenCreateOrConnectWithoutServicioInput | ImagenCreateOrConnectWithoutServicioInput[]
    createMany?: ImagenCreateManyServicioInputEnvelope
    connect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
  }

  export type MiServicioUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<MiServicioCreateWithoutServicioInput, MiServicioUncheckedCreateWithoutServicioInput> | MiServicioCreateWithoutServicioInput[] | MiServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: MiServicioCreateOrConnectWithoutServicioInput | MiServicioCreateOrConnectWithoutServicioInput[]
    createMany?: MiServicioCreateManyServicioInputEnvelope
    connect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
  }

  export type ClickMarketplaceUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<ClickMarketplaceCreateWithoutServicioInput, ClickMarketplaceUncheckedCreateWithoutServicioInput> | ClickMarketplaceCreateWithoutServicioInput[] | ClickMarketplaceUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ClickMarketplaceCreateOrConnectWithoutServicioInput | ClickMarketplaceCreateOrConnectWithoutServicioInput[]
    createMany?: ClickMarketplaceCreateManyServicioInputEnvelope
    connect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
  }

  export type ImagenUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<ImagenCreateWithoutServicioInput, ImagenUncheckedCreateWithoutServicioInput> | ImagenCreateWithoutServicioInput[] | ImagenUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ImagenCreateOrConnectWithoutServicioInput | ImagenCreateOrConnectWithoutServicioInput[]
    createMany?: ImagenCreateManyServicioInputEnvelope
    connect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
  }

  export type MiServicioUpdateManyWithoutServicioNestedInput = {
    create?: XOR<MiServicioCreateWithoutServicioInput, MiServicioUncheckedCreateWithoutServicioInput> | MiServicioCreateWithoutServicioInput[] | MiServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: MiServicioCreateOrConnectWithoutServicioInput | MiServicioCreateOrConnectWithoutServicioInput[]
    upsert?: MiServicioUpsertWithWhereUniqueWithoutServicioInput | MiServicioUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: MiServicioCreateManyServicioInputEnvelope
    set?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    disconnect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    delete?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    connect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    update?: MiServicioUpdateWithWhereUniqueWithoutServicioInput | MiServicioUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: MiServicioUpdateManyWithWhereWithoutServicioInput | MiServicioUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: MiServicioScalarWhereInput | MiServicioScalarWhereInput[]
  }

  export type VendorUpdateOneWithoutServicios_aportadosNestedInput = {
    create?: XOR<VendorCreateWithoutServicios_aportadosInput, VendorUncheckedCreateWithoutServicios_aportadosInput>
    connectOrCreate?: VendorCreateOrConnectWithoutServicios_aportadosInput
    upsert?: VendorUpsertWithoutServicios_aportadosInput
    disconnect?: VendorWhereInput | boolean
    delete?: VendorWhereInput | boolean
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutServicios_aportadosInput, VendorUpdateWithoutServicios_aportadosInput>, VendorUncheckedUpdateWithoutServicios_aportadosInput>
  }

  export type ClickMarketplaceUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ClickMarketplaceCreateWithoutServicioInput, ClickMarketplaceUncheckedCreateWithoutServicioInput> | ClickMarketplaceCreateWithoutServicioInput[] | ClickMarketplaceUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ClickMarketplaceCreateOrConnectWithoutServicioInput | ClickMarketplaceCreateOrConnectWithoutServicioInput[]
    upsert?: ClickMarketplaceUpsertWithWhereUniqueWithoutServicioInput | ClickMarketplaceUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ClickMarketplaceCreateManyServicioInputEnvelope
    set?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    disconnect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    delete?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    connect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    update?: ClickMarketplaceUpdateWithWhereUniqueWithoutServicioInput | ClickMarketplaceUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ClickMarketplaceUpdateManyWithWhereWithoutServicioInput | ClickMarketplaceUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ClickMarketplaceScalarWhereInput | ClickMarketplaceScalarWhereInput[]
  }

  export type ImagenUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ImagenCreateWithoutServicioInput, ImagenUncheckedCreateWithoutServicioInput> | ImagenCreateWithoutServicioInput[] | ImagenUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ImagenCreateOrConnectWithoutServicioInput | ImagenCreateOrConnectWithoutServicioInput[]
    upsert?: ImagenUpsertWithWhereUniqueWithoutServicioInput | ImagenUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ImagenCreateManyServicioInputEnvelope
    set?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    disconnect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    delete?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    connect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    update?: ImagenUpdateWithWhereUniqueWithoutServicioInput | ImagenUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ImagenUpdateManyWithWhereWithoutServicioInput | ImagenUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ImagenScalarWhereInput | ImagenScalarWhereInput[]
  }

  export type MiServicioUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<MiServicioCreateWithoutServicioInput, MiServicioUncheckedCreateWithoutServicioInput> | MiServicioCreateWithoutServicioInput[] | MiServicioUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: MiServicioCreateOrConnectWithoutServicioInput | MiServicioCreateOrConnectWithoutServicioInput[]
    upsert?: MiServicioUpsertWithWhereUniqueWithoutServicioInput | MiServicioUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: MiServicioCreateManyServicioInputEnvelope
    set?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    disconnect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    delete?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    connect?: MiServicioWhereUniqueInput | MiServicioWhereUniqueInput[]
    update?: MiServicioUpdateWithWhereUniqueWithoutServicioInput | MiServicioUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: MiServicioUpdateManyWithWhereWithoutServicioInput | MiServicioUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: MiServicioScalarWhereInput | MiServicioScalarWhereInput[]
  }

  export type ClickMarketplaceUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ClickMarketplaceCreateWithoutServicioInput, ClickMarketplaceUncheckedCreateWithoutServicioInput> | ClickMarketplaceCreateWithoutServicioInput[] | ClickMarketplaceUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ClickMarketplaceCreateOrConnectWithoutServicioInput | ClickMarketplaceCreateOrConnectWithoutServicioInput[]
    upsert?: ClickMarketplaceUpsertWithWhereUniqueWithoutServicioInput | ClickMarketplaceUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ClickMarketplaceCreateManyServicioInputEnvelope
    set?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    disconnect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    delete?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    connect?: ClickMarketplaceWhereUniqueInput | ClickMarketplaceWhereUniqueInput[]
    update?: ClickMarketplaceUpdateWithWhereUniqueWithoutServicioInput | ClickMarketplaceUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ClickMarketplaceUpdateManyWithWhereWithoutServicioInput | ClickMarketplaceUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ClickMarketplaceScalarWhereInput | ClickMarketplaceScalarWhereInput[]
  }

  export type ImagenUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ImagenCreateWithoutServicioInput, ImagenUncheckedCreateWithoutServicioInput> | ImagenCreateWithoutServicioInput[] | ImagenUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ImagenCreateOrConnectWithoutServicioInput | ImagenCreateOrConnectWithoutServicioInput[]
    upsert?: ImagenUpsertWithWhereUniqueWithoutServicioInput | ImagenUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ImagenCreateManyServicioInputEnvelope
    set?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    disconnect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    delete?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    connect?: ImagenWhereUniqueInput | ImagenWhereUniqueInput[]
    update?: ImagenUpdateWithWhereUniqueWithoutServicioInput | ImagenUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ImagenUpdateManyWithWhereWithoutServicioInput | ImagenUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ImagenScalarWhereInput | ImagenScalarWhereInput[]
  }

  export type VendorCreateNestedOneWithoutMis_serviciosInput = {
    create?: XOR<VendorCreateWithoutMis_serviciosInput, VendorUncheckedCreateWithoutMis_serviciosInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMis_serviciosInput
    connect?: VendorWhereUniqueInput
  }

  export type ServicioBaseCreateNestedOneWithoutMis_serviciosInput = {
    create?: XOR<ServicioBaseCreateWithoutMis_serviciosInput, ServicioBaseUncheckedCreateWithoutMis_serviciosInput>
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutMis_serviciosInput
    connect?: ServicioBaseWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutMis_serviciosNestedInput = {
    create?: XOR<VendorCreateWithoutMis_serviciosInput, VendorUncheckedCreateWithoutMis_serviciosInput>
    connectOrCreate?: VendorCreateOrConnectWithoutMis_serviciosInput
    upsert?: VendorUpsertWithoutMis_serviciosInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutMis_serviciosInput, VendorUpdateWithoutMis_serviciosInput>, VendorUncheckedUpdateWithoutMis_serviciosInput>
  }

  export type ServicioBaseUpdateOneRequiredWithoutMis_serviciosNestedInput = {
    create?: XOR<ServicioBaseCreateWithoutMis_serviciosInput, ServicioBaseUncheckedCreateWithoutMis_serviciosInput>
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutMis_serviciosInput
    upsert?: ServicioBaseUpsertWithoutMis_serviciosInput
    connect?: ServicioBaseWhereUniqueInput
    update?: XOR<XOR<ServicioBaseUpdateToOneWithWhereWithoutMis_serviciosInput, ServicioBaseUpdateWithoutMis_serviciosInput>, ServicioBaseUncheckedUpdateWithoutMis_serviciosInput>
  }

  export type ServicioBaseCreateNestedOneWithoutImagenesInput = {
    create?: XOR<ServicioBaseCreateWithoutImagenesInput, ServicioBaseUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutImagenesInput
    connect?: ServicioBaseWhereUniqueInput
  }

  export type ServicioBaseUpdateOneWithoutImagenesNestedInput = {
    create?: XOR<ServicioBaseCreateWithoutImagenesInput, ServicioBaseUncheckedCreateWithoutImagenesInput>
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutImagenesInput
    upsert?: ServicioBaseUpsertWithoutImagenesInput
    disconnect?: ServicioBaseWhereInput | boolean
    delete?: ServicioBaseWhereInput | boolean
    connect?: ServicioBaseWhereUniqueInput
    update?: XOR<XOR<ServicioBaseUpdateToOneWithWhereWithoutImagenesInput, ServicioBaseUpdateWithoutImagenesInput>, ServicioBaseUncheckedUpdateWithoutImagenesInput>
  }

  export type VendorCreateNestedOneWithoutPedidosInput = {
    create?: XOR<VendorCreateWithoutPedidosInput, VendorUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPedidosInput
    connect?: VendorWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<VendorCreateWithoutPedidosInput, VendorUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPedidosInput
    upsert?: VendorUpsertWithoutPedidosInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutPedidosInput, VendorUpdateWithoutPedidosInput>, VendorUncheckedUpdateWithoutPedidosInput>
  }

  export type VendorCreateNestedOneWithoutPagosInput = {
    create?: XOR<VendorCreateWithoutPagosInput, VendorUncheckedCreateWithoutPagosInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPagosInput
    connect?: VendorWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutPagosInput = {
    create?: XOR<PlanCreateWithoutPagosInput, PlanUncheckedCreateWithoutPagosInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPagosInput
    connect?: PlanWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<VendorCreateWithoutPagosInput, VendorUncheckedCreateWithoutPagosInput>
    connectOrCreate?: VendorCreateOrConnectWithoutPagosInput
    upsert?: VendorUpsertWithoutPagosInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutPagosInput, VendorUpdateWithoutPagosInput>, VendorUncheckedUpdateWithoutPagosInput>
  }

  export type PlanUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<PlanCreateWithoutPagosInput, PlanUncheckedCreateWithoutPagosInput>
    connectOrCreate?: PlanCreateOrConnectWithoutPagosInput
    upsert?: PlanUpsertWithoutPagosInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutPagosInput, PlanUpdateWithoutPagosInput>, PlanUncheckedUpdateWithoutPagosInput>
  }

  export type VendorCreateNestedOneWithoutClicks_marketplaceInput = {
    create?: XOR<VendorCreateWithoutClicks_marketplaceInput, VendorUncheckedCreateWithoutClicks_marketplaceInput>
    connectOrCreate?: VendorCreateOrConnectWithoutClicks_marketplaceInput
    connect?: VendorWhereUniqueInput
  }

  export type ServicioBaseCreateNestedOneWithoutClicksInput = {
    create?: XOR<ServicioBaseCreateWithoutClicksInput, ServicioBaseUncheckedCreateWithoutClicksInput>
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutClicksInput
    connect?: ServicioBaseWhereUniqueInput
  }

  export type VendorUpdateOneRequiredWithoutClicks_marketplaceNestedInput = {
    create?: XOR<VendorCreateWithoutClicks_marketplaceInput, VendorUncheckedCreateWithoutClicks_marketplaceInput>
    connectOrCreate?: VendorCreateOrConnectWithoutClicks_marketplaceInput
    upsert?: VendorUpsertWithoutClicks_marketplaceInput
    connect?: VendorWhereUniqueInput
    update?: XOR<XOR<VendorUpdateToOneWithWhereWithoutClicks_marketplaceInput, VendorUpdateWithoutClicks_marketplaceInput>, VendorUncheckedUpdateWithoutClicks_marketplaceInput>
  }

  export type ServicioBaseUpdateOneRequiredWithoutClicksNestedInput = {
    create?: XOR<ServicioBaseCreateWithoutClicksInput, ServicioBaseUncheckedCreateWithoutClicksInput>
    connectOrCreate?: ServicioBaseCreateOrConnectWithoutClicksInput
    upsert?: ServicioBaseUpsertWithoutClicksInput
    connect?: ServicioBaseWhereUniqueInput
    update?: XOR<XOR<ServicioBaseUpdateToOneWithWhereWithoutClicksInput, ServicioBaseUpdateWithoutClicksInput>, ServicioBaseUncheckedUpdateWithoutClicksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PlanCreateWithoutVendorsInput = {
    id?: string
    nombre: string
    precio: number
    dias: number
    tipo?: string
    limite_servicios?: number | null
    texto_limite?: string | null
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
    pagos?: PagoCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutVendorsInput = {
    id?: string
    nombre: string
    precio: number
    dias: number
    tipo?: string
    limite_servicios?: number | null
    texto_limite?: string | null
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
    pagos?: PagoUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutVendorsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutVendorsInput, PlanUncheckedCreateWithoutVendorsInput>
  }

  export type MiServicioCreateWithoutVendorInput = {
    id?: string
    precio_venta: number
    activo?: boolean
    creado_en?: Date | string
    servicio: ServicioBaseCreateNestedOneWithoutMis_serviciosInput
  }

  export type MiServicioUncheckedCreateWithoutVendorInput = {
    id?: string
    servicio_id: string
    precio_venta: number
    activo?: boolean
    creado_en?: Date | string
  }

  export type MiServicioCreateOrConnectWithoutVendorInput = {
    where: MiServicioWhereUniqueInput
    create: XOR<MiServicioCreateWithoutVendorInput, MiServicioUncheckedCreateWithoutVendorInput>
  }

  export type MiServicioCreateManyVendorInputEnvelope = {
    data: MiServicioCreateManyVendorInput | MiServicioCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutVendorInput = {
    id?: string
    servicio_id: string
    notas?: string | null
    status?: string
    creado_en?: Date | string
  }

  export type PedidoUncheckedCreateWithoutVendorInput = {
    id?: string
    servicio_id: string
    notas?: string | null
    status?: string
    creado_en?: Date | string
  }

  export type PedidoCreateOrConnectWithoutVendorInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutVendorInput, PedidoUncheckedCreateWithoutVendorInput>
  }

  export type PedidoCreateManyVendorInputEnvelope = {
    data: PedidoCreateManyVendorInput | PedidoCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type PagoCreateWithoutVendorInput = {
    id?: string
    monto: number
    comprobante_url?: string | null
    status?: string
    confirmado_en?: Date | string | null
    notas_admin?: string | null
    creado_en?: Date | string
    plan: PlanCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateWithoutVendorInput = {
    id?: string
    monto: number
    plan_id: string
    comprobante_url?: string | null
    status?: string
    confirmado_en?: Date | string | null
    notas_admin?: string | null
    creado_en?: Date | string
  }

  export type PagoCreateOrConnectWithoutVendorInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutVendorInput, PagoUncheckedCreateWithoutVendorInput>
  }

  export type PagoCreateManyVendorInputEnvelope = {
    data: PagoCreateManyVendorInput | PagoCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type ServicioBaseCreateWithoutProveedorInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    mis_servicios?: MiServicioCreateNestedManyWithoutServicioInput
    clicks?: ClickMarketplaceCreateNestedManyWithoutServicioInput
    imagenes?: ImagenCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseUncheckedCreateWithoutProveedorInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutServicioInput
    clicks?: ClickMarketplaceUncheckedCreateNestedManyWithoutServicioInput
    imagenes?: ImagenUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseCreateOrConnectWithoutProveedorInput = {
    where: ServicioBaseWhereUniqueInput
    create: XOR<ServicioBaseCreateWithoutProveedorInput, ServicioBaseUncheckedCreateWithoutProveedorInput>
  }

  export type ServicioBaseCreateManyProveedorInputEnvelope = {
    data: ServicioBaseCreateManyProveedorInput | ServicioBaseCreateManyProveedorInput[]
    skipDuplicates?: boolean
  }

  export type ClickMarketplaceCreateWithoutVendorInput = {
    id?: string
    proveedor_id: string
    creado_en?: Date | string
    servicio: ServicioBaseCreateNestedOneWithoutClicksInput
  }

  export type ClickMarketplaceUncheckedCreateWithoutVendorInput = {
    id?: string
    servicio_id: string
    proveedor_id: string
    creado_en?: Date | string
  }

  export type ClickMarketplaceCreateOrConnectWithoutVendorInput = {
    where: ClickMarketplaceWhereUniqueInput
    create: XOR<ClickMarketplaceCreateWithoutVendorInput, ClickMarketplaceUncheckedCreateWithoutVendorInput>
  }

  export type ClickMarketplaceCreateManyVendorInputEnvelope = {
    data: ClickMarketplaceCreateManyVendorInput | ClickMarketplaceCreateManyVendorInput[]
    skipDuplicates?: boolean
  }

  export type PlanUpsertWithoutVendorsInput = {
    update: XOR<PlanUpdateWithoutVendorsInput, PlanUncheckedUpdateWithoutVendorsInput>
    create: XOR<PlanCreateWithoutVendorsInput, PlanUncheckedCreateWithoutVendorsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutVendorsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutVendorsInput, PlanUncheckedUpdateWithoutVendorsInput>
  }

  export type PlanUpdateWithoutVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    dias?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    limite_servicios?: NullableIntFieldUpdateOperationsInput | number | null
    texto_limite?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos_automaticos?: BoolFieldUpdateOperationsInput | boolean
    enlace_publico?: BoolFieldUpdateOperationsInput | boolean
    marketplace_proveedor?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    pagos?: PagoUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutVendorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    dias?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    limite_servicios?: NullableIntFieldUpdateOperationsInput | number | null
    texto_limite?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos_automaticos?: BoolFieldUpdateOperationsInput | boolean
    enlace_publico?: BoolFieldUpdateOperationsInput | boolean
    marketplace_proveedor?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    pagos?: PagoUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type MiServicioUpsertWithWhereUniqueWithoutVendorInput = {
    where: MiServicioWhereUniqueInput
    update: XOR<MiServicioUpdateWithoutVendorInput, MiServicioUncheckedUpdateWithoutVendorInput>
    create: XOR<MiServicioCreateWithoutVendorInput, MiServicioUncheckedCreateWithoutVendorInput>
  }

  export type MiServicioUpdateWithWhereUniqueWithoutVendorInput = {
    where: MiServicioWhereUniqueInput
    data: XOR<MiServicioUpdateWithoutVendorInput, MiServicioUncheckedUpdateWithoutVendorInput>
  }

  export type MiServicioUpdateManyWithWhereWithoutVendorInput = {
    where: MiServicioScalarWhereInput
    data: XOR<MiServicioUpdateManyMutationInput, MiServicioUncheckedUpdateManyWithoutVendorInput>
  }

  export type MiServicioScalarWhereInput = {
    AND?: MiServicioScalarWhereInput | MiServicioScalarWhereInput[]
    OR?: MiServicioScalarWhereInput[]
    NOT?: MiServicioScalarWhereInput | MiServicioScalarWhereInput[]
    id?: StringFilter<"MiServicio"> | string
    vendor_id?: StringFilter<"MiServicio"> | string
    servicio_id?: StringFilter<"MiServicio"> | string
    precio_venta?: FloatFilter<"MiServicio"> | number
    activo?: BoolFilter<"MiServicio"> | boolean
    creado_en?: DateTimeFilter<"MiServicio"> | Date | string
  }

  export type PedidoUpsertWithWhereUniqueWithoutVendorInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutVendorInput, PedidoUncheckedUpdateWithoutVendorInput>
    create: XOR<PedidoCreateWithoutVendorInput, PedidoUncheckedCreateWithoutVendorInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutVendorInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutVendorInput, PedidoUncheckedUpdateWithoutVendorInput>
  }

  export type PedidoUpdateManyWithWhereWithoutVendorInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutVendorInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id?: StringFilter<"Pedido"> | string
    vendor_id?: StringFilter<"Pedido"> | string
    servicio_id?: StringFilter<"Pedido"> | string
    notas?: StringNullableFilter<"Pedido"> | string | null
    status?: StringFilter<"Pedido"> | string
    creado_en?: DateTimeFilter<"Pedido"> | Date | string
  }

  export type PagoUpsertWithWhereUniqueWithoutVendorInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutVendorInput, PagoUncheckedUpdateWithoutVendorInput>
    create: XOR<PagoCreateWithoutVendorInput, PagoUncheckedCreateWithoutVendorInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutVendorInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutVendorInput, PagoUncheckedUpdateWithoutVendorInput>
  }

  export type PagoUpdateManyWithWhereWithoutVendorInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutVendorInput>
  }

  export type PagoScalarWhereInput = {
    AND?: PagoScalarWhereInput | PagoScalarWhereInput[]
    OR?: PagoScalarWhereInput[]
    NOT?: PagoScalarWhereInput | PagoScalarWhereInput[]
    id?: StringFilter<"Pago"> | string
    vendor_id?: StringFilter<"Pago"> | string
    monto?: FloatFilter<"Pago"> | number
    plan_id?: StringFilter<"Pago"> | string
    comprobante_url?: StringNullableFilter<"Pago"> | string | null
    status?: StringFilter<"Pago"> | string
    confirmado_en?: DateTimeNullableFilter<"Pago"> | Date | string | null
    notas_admin?: StringNullableFilter<"Pago"> | string | null
    creado_en?: DateTimeFilter<"Pago"> | Date | string
  }

  export type ServicioBaseUpsertWithWhereUniqueWithoutProveedorInput = {
    where: ServicioBaseWhereUniqueInput
    update: XOR<ServicioBaseUpdateWithoutProveedorInput, ServicioBaseUncheckedUpdateWithoutProveedorInput>
    create: XOR<ServicioBaseCreateWithoutProveedorInput, ServicioBaseUncheckedCreateWithoutProveedorInput>
  }

  export type ServicioBaseUpdateWithWhereUniqueWithoutProveedorInput = {
    where: ServicioBaseWhereUniqueInput
    data: XOR<ServicioBaseUpdateWithoutProveedorInput, ServicioBaseUncheckedUpdateWithoutProveedorInput>
  }

  export type ServicioBaseUpdateManyWithWhereWithoutProveedorInput = {
    where: ServicioBaseScalarWhereInput
    data: XOR<ServicioBaseUpdateManyMutationInput, ServicioBaseUncheckedUpdateManyWithoutProveedorInput>
  }

  export type ServicioBaseScalarWhereInput = {
    AND?: ServicioBaseScalarWhereInput | ServicioBaseScalarWhereInput[]
    OR?: ServicioBaseScalarWhereInput[]
    NOT?: ServicioBaseScalarWhereInput | ServicioBaseScalarWhereInput[]
    id?: StringFilter<"ServicioBase"> | string
    nombre?: StringFilter<"ServicioBase"> | string
    logo_url?: StringFilter<"ServicioBase"> | string
    descripcion_base?: StringFilter<"ServicioBase"> | string
    precio_sugerido?: FloatFilter<"ServicioBase"> | number
    categoria?: StringFilter<"ServicioBase"> | string
    es_iptv_propio?: BoolFilter<"ServicioBase"> | boolean
    estado_actual?: StringFilter<"ServicioBase"> | string
    nota_estado?: StringNullableFilter<"ServicioBase"> | string | null
    proveedor_id?: StringNullableFilter<"ServicioBase"> | string | null
    comision_pct?: FloatFilter<"ServicioBase"> | number
    estado_aprobacion?: StringFilter<"ServicioBase"> | string
    activo?: BoolFilter<"ServicioBase"> | boolean
  }

  export type ClickMarketplaceUpsertWithWhereUniqueWithoutVendorInput = {
    where: ClickMarketplaceWhereUniqueInput
    update: XOR<ClickMarketplaceUpdateWithoutVendorInput, ClickMarketplaceUncheckedUpdateWithoutVendorInput>
    create: XOR<ClickMarketplaceCreateWithoutVendorInput, ClickMarketplaceUncheckedCreateWithoutVendorInput>
  }

  export type ClickMarketplaceUpdateWithWhereUniqueWithoutVendorInput = {
    where: ClickMarketplaceWhereUniqueInput
    data: XOR<ClickMarketplaceUpdateWithoutVendorInput, ClickMarketplaceUncheckedUpdateWithoutVendorInput>
  }

  export type ClickMarketplaceUpdateManyWithWhereWithoutVendorInput = {
    where: ClickMarketplaceScalarWhereInput
    data: XOR<ClickMarketplaceUpdateManyMutationInput, ClickMarketplaceUncheckedUpdateManyWithoutVendorInput>
  }

  export type ClickMarketplaceScalarWhereInput = {
    AND?: ClickMarketplaceScalarWhereInput | ClickMarketplaceScalarWhereInput[]
    OR?: ClickMarketplaceScalarWhereInput[]
    NOT?: ClickMarketplaceScalarWhereInput | ClickMarketplaceScalarWhereInput[]
    id?: StringFilter<"ClickMarketplace"> | string
    vendor_id?: StringFilter<"ClickMarketplace"> | string
    servicio_id?: StringFilter<"ClickMarketplace"> | string
    proveedor_id?: StringFilter<"ClickMarketplace"> | string
    creado_en?: DateTimeFilter<"ClickMarketplace"> | Date | string
  }

  export type VendorCreateWithoutPlanInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    mis_servicios?: MiServicioCreateNestedManyWithoutVendorInput
    pedidos?: PedidoCreateNestedManyWithoutVendorInput
    pagos?: PagoCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPlanInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutVendorInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutVendorInput
    pagos?: PagoUncheckedCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseUncheckedCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutPlanInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPlanInput, VendorUncheckedCreateWithoutPlanInput>
  }

  export type VendorCreateManyPlanInputEnvelope = {
    data: VendorCreateManyPlanInput | VendorCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type PagoCreateWithoutPlanInput = {
    id?: string
    monto: number
    comprobante_url?: string | null
    status?: string
    confirmado_en?: Date | string | null
    notas_admin?: string | null
    creado_en?: Date | string
    vendor: VendorCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateWithoutPlanInput = {
    id?: string
    vendor_id: string
    monto: number
    comprobante_url?: string | null
    status?: string
    confirmado_en?: Date | string | null
    notas_admin?: string | null
    creado_en?: Date | string
  }

  export type PagoCreateOrConnectWithoutPlanInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutPlanInput, PagoUncheckedCreateWithoutPlanInput>
  }

  export type PagoCreateManyPlanInputEnvelope = {
    data: PagoCreateManyPlanInput | PagoCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type VendorUpsertWithWhereUniqueWithoutPlanInput = {
    where: VendorWhereUniqueInput
    update: XOR<VendorUpdateWithoutPlanInput, VendorUncheckedUpdateWithoutPlanInput>
    create: XOR<VendorCreateWithoutPlanInput, VendorUncheckedCreateWithoutPlanInput>
  }

  export type VendorUpdateWithWhereUniqueWithoutPlanInput = {
    where: VendorWhereUniqueInput
    data: XOR<VendorUpdateWithoutPlanInput, VendorUncheckedUpdateWithoutPlanInput>
  }

  export type VendorUpdateManyWithWhereWithoutPlanInput = {
    where: VendorScalarWhereInput
    data: XOR<VendorUpdateManyMutationInput, VendorUncheckedUpdateManyWithoutPlanInput>
  }

  export type VendorScalarWhereInput = {
    AND?: VendorScalarWhereInput | VendorScalarWhereInput[]
    OR?: VendorScalarWhereInput[]
    NOT?: VendorScalarWhereInput | VendorScalarWhereInput[]
    id?: StringFilter<"Vendor"> | string
    nombre?: StringFilter<"Vendor"> | string
    alias?: StringFilter<"Vendor"> | string
    telefono?: StringFilter<"Vendor"> | string
    password_hash?: StringFilter<"Vendor"> | string
    logo_url?: StringNullableFilter<"Vendor"> | string | null
    logo_cloudinary_id?: StringNullableFilter<"Vendor"> | string | null
    whatsapp?: StringNullableFilter<"Vendor"> | string | null
    plan_id?: StringFilter<"Vendor"> | string
    fecha_registro?: DateTimeFilter<"Vendor"> | Date | string
    fecha_vencimiento?: DateTimeFilter<"Vendor"> | Date | string
    status?: StringFilter<"Vendor"> | string
    rating?: FloatFilter<"Vendor"> | number
    biografia?: StringNullableFilter<"Vendor"> | string | null
    role?: StringFilter<"Vendor"> | string
  }

  export type PagoUpsertWithWhereUniqueWithoutPlanInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutPlanInput, PagoUncheckedUpdateWithoutPlanInput>
    create: XOR<PagoCreateWithoutPlanInput, PagoUncheckedCreateWithoutPlanInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutPlanInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutPlanInput, PagoUncheckedUpdateWithoutPlanInput>
  }

  export type PagoUpdateManyWithWhereWithoutPlanInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutPlanInput>
  }

  export type MiServicioCreateWithoutServicioInput = {
    id?: string
    precio_venta: number
    activo?: boolean
    creado_en?: Date | string
    vendor: VendorCreateNestedOneWithoutMis_serviciosInput
  }

  export type MiServicioUncheckedCreateWithoutServicioInput = {
    id?: string
    vendor_id: string
    precio_venta: number
    activo?: boolean
    creado_en?: Date | string
  }

  export type MiServicioCreateOrConnectWithoutServicioInput = {
    where: MiServicioWhereUniqueInput
    create: XOR<MiServicioCreateWithoutServicioInput, MiServicioUncheckedCreateWithoutServicioInput>
  }

  export type MiServicioCreateManyServicioInputEnvelope = {
    data: MiServicioCreateManyServicioInput | MiServicioCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type VendorCreateWithoutServicios_aportadosInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    plan: PlanCreateNestedOneWithoutVendorsInput
    mis_servicios?: MiServicioCreateNestedManyWithoutVendorInput
    pedidos?: PedidoCreateNestedManyWithoutVendorInput
    pagos?: PagoCreateNestedManyWithoutVendorInput
    clicks_marketplace?: ClickMarketplaceCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutServicios_aportadosInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    plan_id: string
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutVendorInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutVendorInput
    pagos?: PagoUncheckedCreateNestedManyWithoutVendorInput
    clicks_marketplace?: ClickMarketplaceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutServicios_aportadosInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutServicios_aportadosInput, VendorUncheckedCreateWithoutServicios_aportadosInput>
  }

  export type ClickMarketplaceCreateWithoutServicioInput = {
    id?: string
    proveedor_id: string
    creado_en?: Date | string
    vendor: VendorCreateNestedOneWithoutClicks_marketplaceInput
  }

  export type ClickMarketplaceUncheckedCreateWithoutServicioInput = {
    id?: string
    vendor_id: string
    proveedor_id: string
    creado_en?: Date | string
  }

  export type ClickMarketplaceCreateOrConnectWithoutServicioInput = {
    where: ClickMarketplaceWhereUniqueInput
    create: XOR<ClickMarketplaceCreateWithoutServicioInput, ClickMarketplaceUncheckedCreateWithoutServicioInput>
  }

  export type ClickMarketplaceCreateManyServicioInputEnvelope = {
    data: ClickMarketplaceCreateManyServicioInput | ClickMarketplaceCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type ImagenCreateWithoutServicioInput = {
    id?: string
    titulo: string
    public_id: string
    url_base: string
    etiquetas: string
    categoria?: string
    activo?: boolean
    creado_en?: Date | string
  }

  export type ImagenUncheckedCreateWithoutServicioInput = {
    id?: string
    titulo: string
    public_id: string
    url_base: string
    etiquetas: string
    categoria?: string
    activo?: boolean
    creado_en?: Date | string
  }

  export type ImagenCreateOrConnectWithoutServicioInput = {
    where: ImagenWhereUniqueInput
    create: XOR<ImagenCreateWithoutServicioInput, ImagenUncheckedCreateWithoutServicioInput>
  }

  export type ImagenCreateManyServicioInputEnvelope = {
    data: ImagenCreateManyServicioInput | ImagenCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type MiServicioUpsertWithWhereUniqueWithoutServicioInput = {
    where: MiServicioWhereUniqueInput
    update: XOR<MiServicioUpdateWithoutServicioInput, MiServicioUncheckedUpdateWithoutServicioInput>
    create: XOR<MiServicioCreateWithoutServicioInput, MiServicioUncheckedCreateWithoutServicioInput>
  }

  export type MiServicioUpdateWithWhereUniqueWithoutServicioInput = {
    where: MiServicioWhereUniqueInput
    data: XOR<MiServicioUpdateWithoutServicioInput, MiServicioUncheckedUpdateWithoutServicioInput>
  }

  export type MiServicioUpdateManyWithWhereWithoutServicioInput = {
    where: MiServicioScalarWhereInput
    data: XOR<MiServicioUpdateManyMutationInput, MiServicioUncheckedUpdateManyWithoutServicioInput>
  }

  export type VendorUpsertWithoutServicios_aportadosInput = {
    update: XOR<VendorUpdateWithoutServicios_aportadosInput, VendorUncheckedUpdateWithoutServicios_aportadosInput>
    create: XOR<VendorCreateWithoutServicios_aportadosInput, VendorUncheckedCreateWithoutServicios_aportadosInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutServicios_aportadosInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutServicios_aportadosInput, VendorUncheckedUpdateWithoutServicios_aportadosInput>
  }

  export type VendorUpdateWithoutServicios_aportadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutVendorsNestedInput
    mis_servicios?: MiServicioUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUpdateManyWithoutVendorNestedInput
    pagos?: PagoUpdateManyWithoutVendorNestedInput
    clicks_marketplace?: ClickMarketplaceUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutServicios_aportadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutVendorNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutVendorNestedInput
    clicks_marketplace?: ClickMarketplaceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ClickMarketplaceUpsertWithWhereUniqueWithoutServicioInput = {
    where: ClickMarketplaceWhereUniqueInput
    update: XOR<ClickMarketplaceUpdateWithoutServicioInput, ClickMarketplaceUncheckedUpdateWithoutServicioInput>
    create: XOR<ClickMarketplaceCreateWithoutServicioInput, ClickMarketplaceUncheckedCreateWithoutServicioInput>
  }

  export type ClickMarketplaceUpdateWithWhereUniqueWithoutServicioInput = {
    where: ClickMarketplaceWhereUniqueInput
    data: XOR<ClickMarketplaceUpdateWithoutServicioInput, ClickMarketplaceUncheckedUpdateWithoutServicioInput>
  }

  export type ClickMarketplaceUpdateManyWithWhereWithoutServicioInput = {
    where: ClickMarketplaceScalarWhereInput
    data: XOR<ClickMarketplaceUpdateManyMutationInput, ClickMarketplaceUncheckedUpdateManyWithoutServicioInput>
  }

  export type ImagenUpsertWithWhereUniqueWithoutServicioInput = {
    where: ImagenWhereUniqueInput
    update: XOR<ImagenUpdateWithoutServicioInput, ImagenUncheckedUpdateWithoutServicioInput>
    create: XOR<ImagenCreateWithoutServicioInput, ImagenUncheckedCreateWithoutServicioInput>
  }

  export type ImagenUpdateWithWhereUniqueWithoutServicioInput = {
    where: ImagenWhereUniqueInput
    data: XOR<ImagenUpdateWithoutServicioInput, ImagenUncheckedUpdateWithoutServicioInput>
  }

  export type ImagenUpdateManyWithWhereWithoutServicioInput = {
    where: ImagenScalarWhereInput
    data: XOR<ImagenUpdateManyMutationInput, ImagenUncheckedUpdateManyWithoutServicioInput>
  }

  export type ImagenScalarWhereInput = {
    AND?: ImagenScalarWhereInput | ImagenScalarWhereInput[]
    OR?: ImagenScalarWhereInput[]
    NOT?: ImagenScalarWhereInput | ImagenScalarWhereInput[]
    id?: StringFilter<"Imagen"> | string
    titulo?: StringFilter<"Imagen"> | string
    public_id?: StringFilter<"Imagen"> | string
    url_base?: StringFilter<"Imagen"> | string
    etiquetas?: StringFilter<"Imagen"> | string
    categoria?: StringFilter<"Imagen"> | string
    activo?: BoolFilter<"Imagen"> | boolean
    creado_en?: DateTimeFilter<"Imagen"> | Date | string
    servicio_id?: StringNullableFilter<"Imagen"> | string | null
  }

  export type VendorCreateWithoutMis_serviciosInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    plan: PlanCreateNestedOneWithoutVendorsInput
    pedidos?: PedidoCreateNestedManyWithoutVendorInput
    pagos?: PagoCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutMis_serviciosInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    plan_id: string
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    pedidos?: PedidoUncheckedCreateNestedManyWithoutVendorInput
    pagos?: PagoUncheckedCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseUncheckedCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutMis_serviciosInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutMis_serviciosInput, VendorUncheckedCreateWithoutMis_serviciosInput>
  }

  export type ServicioBaseCreateWithoutMis_serviciosInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    proveedor?: VendorCreateNestedOneWithoutServicios_aportadosInput
    clicks?: ClickMarketplaceCreateNestedManyWithoutServicioInput
    imagenes?: ImagenCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseUncheckedCreateWithoutMis_serviciosInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    proveedor_id?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    clicks?: ClickMarketplaceUncheckedCreateNestedManyWithoutServicioInput
    imagenes?: ImagenUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseCreateOrConnectWithoutMis_serviciosInput = {
    where: ServicioBaseWhereUniqueInput
    create: XOR<ServicioBaseCreateWithoutMis_serviciosInput, ServicioBaseUncheckedCreateWithoutMis_serviciosInput>
  }

  export type VendorUpsertWithoutMis_serviciosInput = {
    update: XOR<VendorUpdateWithoutMis_serviciosInput, VendorUncheckedUpdateWithoutMis_serviciosInput>
    create: XOR<VendorCreateWithoutMis_serviciosInput, VendorUncheckedCreateWithoutMis_serviciosInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutMis_serviciosInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutMis_serviciosInput, VendorUncheckedUpdateWithoutMis_serviciosInput>
  }

  export type VendorUpdateWithoutMis_serviciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutVendorsNestedInput
    pedidos?: PedidoUpdateManyWithoutVendorNestedInput
    pagos?: PagoUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutMis_serviciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    pedidos?: PedidoUncheckedUpdateManyWithoutVendorNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUncheckedUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type ServicioBaseUpsertWithoutMis_serviciosInput = {
    update: XOR<ServicioBaseUpdateWithoutMis_serviciosInput, ServicioBaseUncheckedUpdateWithoutMis_serviciosInput>
    create: XOR<ServicioBaseCreateWithoutMis_serviciosInput, ServicioBaseUncheckedCreateWithoutMis_serviciosInput>
    where?: ServicioBaseWhereInput
  }

  export type ServicioBaseUpdateToOneWithWhereWithoutMis_serviciosInput = {
    where?: ServicioBaseWhereInput
    data: XOR<ServicioBaseUpdateWithoutMis_serviciosInput, ServicioBaseUncheckedUpdateWithoutMis_serviciosInput>
  }

  export type ServicioBaseUpdateWithoutMis_serviciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    proveedor?: VendorUpdateOneWithoutServicios_aportadosNestedInput
    clicks?: ClickMarketplaceUpdateManyWithoutServicioNestedInput
    imagenes?: ImagenUpdateManyWithoutServicioNestedInput
  }

  export type ServicioBaseUncheckedUpdateWithoutMis_serviciosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor_id?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    clicks?: ClickMarketplaceUncheckedUpdateManyWithoutServicioNestedInput
    imagenes?: ImagenUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioBaseCreateWithoutImagenesInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    mis_servicios?: MiServicioCreateNestedManyWithoutServicioInput
    proveedor?: VendorCreateNestedOneWithoutServicios_aportadosInput
    clicks?: ClickMarketplaceCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseUncheckedCreateWithoutImagenesInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    proveedor_id?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutServicioInput
    clicks?: ClickMarketplaceUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseCreateOrConnectWithoutImagenesInput = {
    where: ServicioBaseWhereUniqueInput
    create: XOR<ServicioBaseCreateWithoutImagenesInput, ServicioBaseUncheckedCreateWithoutImagenesInput>
  }

  export type ServicioBaseUpsertWithoutImagenesInput = {
    update: XOR<ServicioBaseUpdateWithoutImagenesInput, ServicioBaseUncheckedUpdateWithoutImagenesInput>
    create: XOR<ServicioBaseCreateWithoutImagenesInput, ServicioBaseUncheckedCreateWithoutImagenesInput>
    where?: ServicioBaseWhereInput
  }

  export type ServicioBaseUpdateToOneWithWhereWithoutImagenesInput = {
    where?: ServicioBaseWhereInput
    data: XOR<ServicioBaseUpdateWithoutImagenesInput, ServicioBaseUncheckedUpdateWithoutImagenesInput>
  }

  export type ServicioBaseUpdateWithoutImagenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    mis_servicios?: MiServicioUpdateManyWithoutServicioNestedInput
    proveedor?: VendorUpdateOneWithoutServicios_aportadosNestedInput
    clicks?: ClickMarketplaceUpdateManyWithoutServicioNestedInput
  }

  export type ServicioBaseUncheckedUpdateWithoutImagenesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor_id?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutServicioNestedInput
    clicks?: ClickMarketplaceUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type VendorCreateWithoutPedidosInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    plan: PlanCreateNestedOneWithoutVendorsInput
    mis_servicios?: MiServicioCreateNestedManyWithoutVendorInput
    pagos?: PagoCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPedidosInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    plan_id: string
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutVendorInput
    pagos?: PagoUncheckedCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseUncheckedCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutPedidosInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPedidosInput, VendorUncheckedCreateWithoutPedidosInput>
  }

  export type VendorUpsertWithoutPedidosInput = {
    update: XOR<VendorUpdateWithoutPedidosInput, VendorUncheckedUpdateWithoutPedidosInput>
    create: XOR<VendorCreateWithoutPedidosInput, VendorUncheckedCreateWithoutPedidosInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutPedidosInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutPedidosInput, VendorUncheckedUpdateWithoutPedidosInput>
  }

  export type VendorUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutVendorsNestedInput
    mis_servicios?: MiServicioUpdateManyWithoutVendorNestedInput
    pagos?: PagoUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPedidosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutVendorNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUncheckedUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorCreateWithoutPagosInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    plan: PlanCreateNestedOneWithoutVendorsInput
    mis_servicios?: MiServicioCreateNestedManyWithoutVendorInput
    pedidos?: PedidoCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceCreateNestedManyWithoutVendorInput
  }

  export type VendorUncheckedCreateWithoutPagosInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    plan_id: string
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutVendorInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseUncheckedCreateNestedManyWithoutProveedorInput
    clicks_marketplace?: ClickMarketplaceUncheckedCreateNestedManyWithoutVendorInput
  }

  export type VendorCreateOrConnectWithoutPagosInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutPagosInput, VendorUncheckedCreateWithoutPagosInput>
  }

  export type PlanCreateWithoutPagosInput = {
    id?: string
    nombre: string
    precio: number
    dias: number
    tipo?: string
    limite_servicios?: number | null
    texto_limite?: string | null
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
    vendors?: VendorCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutPagosInput = {
    id?: string
    nombre: string
    precio: number
    dias: number
    tipo?: string
    limite_servicios?: number | null
    texto_limite?: string | null
    pedidos_automaticos?: boolean
    enlace_publico?: boolean
    marketplace_proveedor?: boolean
    activo?: boolean
    vendors?: VendorUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutPagosInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutPagosInput, PlanUncheckedCreateWithoutPagosInput>
  }

  export type VendorUpsertWithoutPagosInput = {
    update: XOR<VendorUpdateWithoutPagosInput, VendorUncheckedUpdateWithoutPagosInput>
    create: XOR<VendorCreateWithoutPagosInput, VendorUncheckedCreateWithoutPagosInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutPagosInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutPagosInput, VendorUncheckedUpdateWithoutPagosInput>
  }

  export type VendorUpdateWithoutPagosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutVendorsNestedInput
    mis_servicios?: MiServicioUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPagosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUncheckedUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type PlanUpsertWithoutPagosInput = {
    update: XOR<PlanUpdateWithoutPagosInput, PlanUncheckedUpdateWithoutPagosInput>
    create: XOR<PlanCreateWithoutPagosInput, PlanUncheckedCreateWithoutPagosInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutPagosInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutPagosInput, PlanUncheckedUpdateWithoutPagosInput>
  }

  export type PlanUpdateWithoutPagosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    dias?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    limite_servicios?: NullableIntFieldUpdateOperationsInput | number | null
    texto_limite?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos_automaticos?: BoolFieldUpdateOperationsInput | boolean
    enlace_publico?: BoolFieldUpdateOperationsInput | boolean
    marketplace_proveedor?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    vendors?: VendorUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutPagosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    dias?: IntFieldUpdateOperationsInput | number
    tipo?: StringFieldUpdateOperationsInput | string
    limite_servicios?: NullableIntFieldUpdateOperationsInput | number | null
    texto_limite?: NullableStringFieldUpdateOperationsInput | string | null
    pedidos_automaticos?: BoolFieldUpdateOperationsInput | boolean
    enlace_publico?: BoolFieldUpdateOperationsInput | boolean
    marketplace_proveedor?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    vendors?: VendorUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type VendorCreateWithoutClicks_marketplaceInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    plan: PlanCreateNestedOneWithoutVendorsInput
    mis_servicios?: MiServicioCreateNestedManyWithoutVendorInput
    pedidos?: PedidoCreateNestedManyWithoutVendorInput
    pagos?: PagoCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseCreateNestedManyWithoutProveedorInput
  }

  export type VendorUncheckedCreateWithoutClicks_marketplaceInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    plan_id: string
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutVendorInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutVendorInput
    pagos?: PagoUncheckedCreateNestedManyWithoutVendorInput
    servicios_aportados?: ServicioBaseUncheckedCreateNestedManyWithoutProveedorInput
  }

  export type VendorCreateOrConnectWithoutClicks_marketplaceInput = {
    where: VendorWhereUniqueInput
    create: XOR<VendorCreateWithoutClicks_marketplaceInput, VendorUncheckedCreateWithoutClicks_marketplaceInput>
  }

  export type ServicioBaseCreateWithoutClicksInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    mis_servicios?: MiServicioCreateNestedManyWithoutServicioInput
    proveedor?: VendorCreateNestedOneWithoutServicios_aportadosInput
    imagenes?: ImagenCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseUncheckedCreateWithoutClicksInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    proveedor_id?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
    mis_servicios?: MiServicioUncheckedCreateNestedManyWithoutServicioInput
    imagenes?: ImagenUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioBaseCreateOrConnectWithoutClicksInput = {
    where: ServicioBaseWhereUniqueInput
    create: XOR<ServicioBaseCreateWithoutClicksInput, ServicioBaseUncheckedCreateWithoutClicksInput>
  }

  export type VendorUpsertWithoutClicks_marketplaceInput = {
    update: XOR<VendorUpdateWithoutClicks_marketplaceInput, VendorUncheckedUpdateWithoutClicks_marketplaceInput>
    create: XOR<VendorCreateWithoutClicks_marketplaceInput, VendorUncheckedCreateWithoutClicks_marketplaceInput>
    where?: VendorWhereInput
  }

  export type VendorUpdateToOneWithWhereWithoutClicks_marketplaceInput = {
    where?: VendorWhereInput
    data: XOR<VendorUpdateWithoutClicks_marketplaceInput, VendorUncheckedUpdateWithoutClicks_marketplaceInput>
  }

  export type VendorUpdateWithoutClicks_marketplaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    plan?: PlanUpdateOneRequiredWithoutVendorsNestedInput
    mis_servicios?: MiServicioUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUpdateManyWithoutVendorNestedInput
    pagos?: PagoUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUpdateManyWithoutProveedorNestedInput
  }

  export type VendorUncheckedUpdateWithoutClicks_marketplaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    plan_id?: StringFieldUpdateOperationsInput | string
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutVendorNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUncheckedUpdateManyWithoutProveedorNestedInput
  }

  export type ServicioBaseUpsertWithoutClicksInput = {
    update: XOR<ServicioBaseUpdateWithoutClicksInput, ServicioBaseUncheckedUpdateWithoutClicksInput>
    create: XOR<ServicioBaseCreateWithoutClicksInput, ServicioBaseUncheckedCreateWithoutClicksInput>
    where?: ServicioBaseWhereInput
  }

  export type ServicioBaseUpdateToOneWithWhereWithoutClicksInput = {
    where?: ServicioBaseWhereInput
    data: XOR<ServicioBaseUpdateWithoutClicksInput, ServicioBaseUncheckedUpdateWithoutClicksInput>
  }

  export type ServicioBaseUpdateWithoutClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    mis_servicios?: MiServicioUpdateManyWithoutServicioNestedInput
    proveedor?: VendorUpdateOneWithoutServicios_aportadosNestedInput
    imagenes?: ImagenUpdateManyWithoutServicioNestedInput
  }

  export type ServicioBaseUncheckedUpdateWithoutClicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    proveedor_id?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutServicioNestedInput
    imagenes?: ImagenUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type MiServicioCreateManyVendorInput = {
    id?: string
    servicio_id: string
    precio_venta: number
    activo?: boolean
    creado_en?: Date | string
  }

  export type PedidoCreateManyVendorInput = {
    id?: string
    servicio_id: string
    notas?: string | null
    status?: string
    creado_en?: Date | string
  }

  export type PagoCreateManyVendorInput = {
    id?: string
    monto: number
    plan_id: string
    comprobante_url?: string | null
    status?: string
    confirmado_en?: Date | string | null
    notas_admin?: string | null
    creado_en?: Date | string
  }

  export type ServicioBaseCreateManyProveedorInput = {
    id?: string
    nombre: string
    logo_url: string
    descripcion_base: string
    precio_sugerido: number
    categoria?: string
    es_iptv_propio?: boolean
    estado_actual?: string
    nota_estado?: string | null
    comision_pct?: number
    estado_aprobacion?: string
    activo?: boolean
  }

  export type ClickMarketplaceCreateManyVendorInput = {
    id?: string
    servicio_id: string
    proveedor_id: string
    creado_en?: Date | string
  }

  export type MiServicioUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    servicio?: ServicioBaseUpdateOneRequiredWithoutMis_serviciosNestedInput
  }

  export type MiServicioUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiServicioUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PedidoUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    plan_id?: StringFieldUpdateOperationsInput | string
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    plan_id?: StringFieldUpdateOperationsInput | string
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioBaseUpdateWithoutProveedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    mis_servicios?: MiServicioUpdateManyWithoutServicioNestedInput
    clicks?: ClickMarketplaceUpdateManyWithoutServicioNestedInput
    imagenes?: ImagenUpdateManyWithoutServicioNestedInput
  }

  export type ServicioBaseUncheckedUpdateWithoutProveedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutServicioNestedInput
    clicks?: ClickMarketplaceUncheckedUpdateManyWithoutServicioNestedInput
    imagenes?: ImagenUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioBaseUncheckedUpdateManyWithoutProveedorInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    descripcion_base?: StringFieldUpdateOperationsInput | string
    precio_sugerido?: FloatFieldUpdateOperationsInput | number
    categoria?: StringFieldUpdateOperationsInput | string
    es_iptv_propio?: BoolFieldUpdateOperationsInput | boolean
    estado_actual?: StringFieldUpdateOperationsInput | string
    nota_estado?: NullableStringFieldUpdateOperationsInput | string | null
    comision_pct?: FloatFieldUpdateOperationsInput | number
    estado_aprobacion?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClickMarketplaceUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    servicio?: ServicioBaseUpdateOneRequiredWithoutClicksNestedInput
  }

  export type ClickMarketplaceUncheckedUpdateWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickMarketplaceUncheckedUpdateManyWithoutVendorInput = {
    id?: StringFieldUpdateOperationsInput | string
    servicio_id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VendorCreateManyPlanInput = {
    id?: string
    nombre: string
    alias: string
    telefono: string
    password_hash: string
    logo_url?: string | null
    logo_cloudinary_id?: string | null
    whatsapp?: string | null
    fecha_registro?: Date | string
    fecha_vencimiento: Date | string
    status?: string
    rating?: number
    biografia?: string | null
    role?: string
  }

  export type PagoCreateManyPlanInput = {
    id?: string
    vendor_id: string
    monto: number
    comprobante_url?: string | null
    status?: string
    confirmado_en?: Date | string | null
    notas_admin?: string | null
    creado_en?: Date | string
  }

  export type VendorUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    mis_servicios?: MiServicioUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUpdateManyWithoutVendorNestedInput
    pagos?: PagoUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    mis_servicios?: MiServicioUncheckedUpdateManyWithoutVendorNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutVendorNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutVendorNestedInput
    servicios_aportados?: ServicioBaseUncheckedUpdateManyWithoutProveedorNestedInput
    clicks_marketplace?: ClickMarketplaceUncheckedUpdateManyWithoutVendorNestedInput
  }

  export type VendorUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    logo_url?: NullableStringFieldUpdateOperationsInput | string | null
    logo_cloudinary_id?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_vencimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    biografia?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    monto?: FloatFieldUpdateOperationsInput | number
    comprobante_url?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    confirmado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notas_admin?: NullableStringFieldUpdateOperationsInput | string | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiServicioCreateManyServicioInput = {
    id?: string
    vendor_id: string
    precio_venta: number
    activo?: boolean
    creado_en?: Date | string
  }

  export type ClickMarketplaceCreateManyServicioInput = {
    id?: string
    vendor_id: string
    proveedor_id: string
    creado_en?: Date | string
  }

  export type ImagenCreateManyServicioInput = {
    id?: string
    titulo: string
    public_id: string
    url_base: string
    etiquetas: string
    categoria?: string
    activo?: boolean
    creado_en?: Date | string
  }

  export type MiServicioUpdateWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutMis_serviciosNestedInput
  }

  export type MiServicioUncheckedUpdateWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MiServicioUncheckedUpdateManyWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    precio_venta?: FloatFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickMarketplaceUpdateWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    vendor?: VendorUpdateOneRequiredWithoutClicks_marketplaceNestedInput
  }

  export type ClickMarketplaceUncheckedUpdateWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClickMarketplaceUncheckedUpdateManyWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    vendor_id?: StringFieldUpdateOperationsInput | string
    proveedor_id?: StringFieldUpdateOperationsInput | string
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagenUpdateWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    etiquetas?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagenUncheckedUpdateWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    etiquetas?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagenUncheckedUpdateManyWithoutServicioInput = {
    id?: StringFieldUpdateOperationsInput | string
    titulo?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    url_base?: StringFieldUpdateOperationsInput | string
    etiquetas?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VendorCountOutputTypeDefaultArgs instead
     */
    export type VendorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicioBaseCountOutputTypeDefaultArgs instead
     */
    export type ServicioBaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicioBaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VendorDefaultArgs instead
     */
    export type VendorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VendorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstrenoDefaultArgs instead
     */
    export type EstrenoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstrenoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServicioBaseDefaultArgs instead
     */
    export type ServicioBaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServicioBaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MiServicioDefaultArgs instead
     */
    export type MiServicioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MiServicioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ImagenDefaultArgs instead
     */
    export type ImagenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ImagenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PartidoDefaultArgs instead
     */
    export type PartidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PartidoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MensajeRapidoDefaultArgs instead
     */
    export type MensajeRapidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MensajeRapidoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PedidoDefaultArgs instead
     */
    export type PedidoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PedidoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagoDefaultArgs instead
     */
    export type PagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AjustesPlataformaDefaultArgs instead
     */
    export type AjustesPlataformaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AjustesPlataformaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClickMarketplaceDefaultArgs instead
     */
    export type ClickMarketplaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClickMarketplaceDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}