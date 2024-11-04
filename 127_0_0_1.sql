-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-11-2024 a las 19:26:20
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `infoenlace`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colaboradores`
--

CREATE TABLE `colaboradores` (
  `idcolaborador` int(11) NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `cargo` varchar(30) NOT NULL,
  `contacto` int(10) NOT NULL,
  `acceso` varchar(50) NOT NULL,
  `contrasena` varchar(50) NOT NULL,
  `confirmar` varchar(50) NOT NULL,
  `checar` varchar(50) NOT NULL,
  `valor` int(10) NOT NULL,
  `foto` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `colaboradores`
--

INSERT INTO `colaboradores` (`idcolaborador`, `nombre`, `usuario`, `correo`, `cargo`, `contacto`, `acceso`, `contrasena`, `confirmar`, `checar`, `valor`, `foto`) VALUES
(2, 'Saul', 'Sauljg', 'sauljeje@gmail.com', 'volvo', 98555412, 'admin', '123456789', '123456789', 'auto', 32, 'dragon-ball-fighterz-logo-2B22AC6F48-seeklogo.com.png'),
(3, 'Rafa1', 'aguaUwu', 'uwu@gmail.com', 'volvo', 998957662, 'super', '12345678', '12364587', 'manual', 787798, ''),
(4, 'Rafa', 'Uwu', 'rafa@gmail.com', 'administrador', 99895471, 'supervisor', '12345678', '12364587', 'auto', 42, 'dragon-ball-fighterz-logo-2B22AC6F48-seeklogo.com.png'),
(5, 'sdsd', 'admon.info', 'djeidj', 'administrador', 79878744, 'supervisor', '12345678', '12364587', 'manual', 42, '6c79d385bfdc8def563ea5bce8dc2d23.png'),
(6, 'ccccc', 'ccc', 'cccc', 'administrador', 0, 'administrador', 'cdcdc', 'cxcx', 'auto', 444, ''),
(7, 'Felipe', 'Uwu', 'senajaja@gmail.com', 'administrador', 7879848, 'supervisor', 'wdwddwd', 'dwdwdwd', 'manual', 34, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `Id` int(20) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Precios` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`Id`, `Nombre`, `Precios`) VALUES
(3, 'lolilo', 320),
(5, 'RAFAAAA', 552),
(6, 'joe', 200),
(7, 'lolilo', 500),
(8, 'joe', 500),
(9, 'pupu', 200);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabcliente`
--

CREATE TABLE `tabcliente` (
  `id_cliente` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `identificacion` int(50) NOT NULL,
  `razon` varchar(150) NOT NULL,
  `codigoext` int(10) NOT NULL,
  `telefonocorp` int(10) NOT NULL,
  `correocliente` varchar(50) NOT NULL,
  `cliente` varchar(50) NOT NULL,
  `responsable` varchar(50) NOT NULL,
  `observacion` varchar(100) NOT NULL,
  `postal` int(10) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `num_ext` int(10) NOT NULL,
  `num_int` int(10) NOT NULL,
  `region` varchar(50) NOT NULL,
  `ciudad` varchar(50) NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tabcliente`
--

INSERT INTO `tabcliente` (`id_cliente`, `nombre`, `identificacion`, `razon`, `codigoext`, `telefonocorp`, `correocliente`, `cliente`, `responsable`, `observacion`, `postal`, `direccion`, `num_ext`, `num_int`, `region`, `ciudad`, `estado`) VALUES
(1, 'Luis', 0, '3', 77534, 2147483647, 'dewer@gmail.com', 'duudud', 'd', 'd', 77534, 'av. kibi', 0, 0, 'quintana roo', 'CANCUN', 'quintana roo'),
(2, 'GUSTABO', 0, 'PDO', 22321, 99857472, 'jorge@gmail.com', 'dingon', 'ojo', 'wuapo', 76654, 'av.colav', 0, 0, 'quintana roo', 'CANCUN', 'quintana roo'),
(3, 'lopez', 0, 'fjejd', 5311, 9987948, 'sifi@gmail.com', 'fufu', 'fheudcc', 'finjicnudnc', 784521, 'av. pupu', 0, 0, 'quintana roo', 'CANCUN', 'quintana roo'),
(4, 'Rodrigo', 43, 'nose', 12, 2147483647, 'jueg@gmail.com', 'fufu', 'Saul', 'mjefmjfnjenfje', 77421, 'av. kghb', 0, 5, 'quintana roo', 'CANCUN', 'quintana roo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablaequipos`
--

CREATE TABLE `tablaequipos` (
  `IdEquipo` int(11) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Identificador` int(100) NOT NULL,
  `Fecha` date NOT NULL,
  `Descripcion` varchar(200) DEFAULT NULL,
  `Asociar` varchar(20) DEFAULT NULL,
  `Atributo` varchar(20) DEFAULT NULL,
  `valor` int(20) DEFAULT NULL,
  `Atributo_2` varchar(20) DEFAULT NULL,
  `valor2` int(20) DEFAULT NULL,
  `Atributo_3` varchar(20) DEFAULT NULL,
  `valor3` int(20) DEFAULT NULL,
  `Atributo_extra` varchar(20) DEFAULT NULL,
  `extra` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='Falta por completar';

--
-- Volcado de datos para la tabla `tablaequipos`
--

INSERT INTO `tablaequipos` (`IdEquipo`, `Nombre`, `Identificador`, `Fecha`, `Descripcion`, `Asociar`, `Atributo`, `valor`, `Atributo_2`, `valor2`, `Atributo_3`, `valor3`, `Atributo_extra`, `extra`) VALUES
(1, 'Pc de Saul', 7, '2024-10-08', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 'MiPc', 123, '2024-10-10', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 'EquipoDeJared', 1029, '2024-10-24', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 'EquipoDeOficina', 1413, '2024-10-23', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 'Cine', 8080, '2024-10-30', 'Rafa pidio a Jorge que juegen a VR chat', NULL, '', 0, '', 0, '', 0, '', 0),
(7, 'Alexis PC', 1254, '2024-10-11', 'undefined', 'Alexis', 'Memoria 12GB', 1600, 'NVIDIA GTX 1080', 2500, 'TARJETA MADRE', 2000, 'RYZEN 7 3600 ', 5000),
(8, 'Rafa PC', 5678, '2024-10-11', 'undefined', 'Alexis', 'Memoria 12GB', 1600, 'NVIDIA GTX 1080', 2500, 'TARJETA MADRE', 2000, 'RYZEN 7 3600 ', 5000),
(9, 'Mariana PC', 9874, '2024-10-11', 'Se cayo y pum ni pdo', NULL, 'Memoria 12GB', 1600, 'NVIDIA GTX 1080', 2500, 'TARJETA MADRE', 2000, 'RYZEN 7 3600 ', 5000),
(10, 'Gael PC', 9874, '2024-10-11', 'undefined', 'Gael', 'Memoria 12GB', 1600, 'NVIDIA RTX 3070', 5000, 'TARJETA MADRE', 2000, 'RYZEN 7 3600 ', 5000),
(11, 'Master PC', 46542, '2024-10-19', 'undefined', 'Master', 'Memoria 12GB', 1600, 'NVIDIA GTX 1080', 0, 'TARJETA MADRE', 2000, 'Intel Core 7 11th', 6000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabproducto`
--

CREATE TABLE `tabproducto` (
  `Idproducto` int(100) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `Valor` double(50,0) DEFAULT NULL,
  `Costo` double(50,0) DEFAULT NULL,
  `Stocks` bigint(50) DEFAULT NULL,
  `Inventario` int(50) DEFAULT NULL,
  `Descripcion` varchar(150) DEFAULT NULL,
  `Categoría` varchar(100) DEFAULT NULL,
  `Fecha_Compra` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tabproducto`
--

INSERT INTO `tabproducto` (`Idproducto`, `Nombre`, `Valor`, `Costo`, `Stocks`, `Inventario`, `Descripcion`, `Categoría`, `Fecha_Compra`) VALUES
(1, 'undefined', 0, 0, 0, 0, 'undefined', '1', '2024-10-15'),
(2, 'undefined', 0, 0, 0, 0, 'undefined', '1', '2024-10-15'),
(3, 'Mariana PC', 200, 220, 24, 10, 'undefined', '1', '2024-10-15'),
(4, 'Mariana PC', 250, 255, 24, 33, 'undefined', '1', '2024-10-15'),
(5, 'Alexis PC', 250, 350, 55, 20, 'GRABAR COMO PARTE DE LA VIGILANCIA', '2', '2024-10-16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id_tarea` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `cliente` text NOT NULL,
  `colaborador` text NOT NULL,
  `fecha` date NOT NULL,
  `tipo` text NOT NULL,
  `equipo` varchar(150) NOT NULL,
  `prioridad` text NOT NULL,
  `descripcion` text NOT NULL,
  `status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id_tarea`, `cliente`, `colaborador`, `fecha`, `tipo`, `equipo`, `prioridad`, `descripcion`, `status`) VALUES
('', 'GUSTABO', 'Rafa1', '2024-11-05', 'Actualizacion de Base de datos', 'Mariana PC', 'alta', 'viene viene', 'Activo'),
('0', 'Rodrigo', 'Rafa1', '2024-10-31', 'Actualizacion de Base de datos', 'Alexis PC', 'baja', 'huuuuu', 'Activo'),
('1', 'GUSTABO', 'Saul', '2024-09-12', '', '0', 'alta', 'Unos Pedillos', 'FINALIZADO'),
('10', 'Luis', 'sdsd', '2024-10-23', 'Actualizacion de Base de datos', 'Alexis PC', 'alta', 'juju', 'Activo'),
('11', 'Luis', 'Rafa', '2024-10-22', 'Actualizacion de Base de datos', 'Rafa PC', 'alta', 'juaz', 'Activo'),
('12', 'Luis', 'Rafa', '2024-10-30', 'Actualizacion de Base de datos', 'Cine', 'baja', 'gg', 'Activo'),
('13', 'Rodrigo', 'Saul', '0000-00-00', 'Actualizacion de Base de datos', 'Master PC', 'media', 'domingo por la tarde', 'Activo'),
('14', 'Rodrigo', 'Saul', '2024-10-31', 'Actualizacion de Base de datos', 'Alexis PC', 'media', 'debe de funcionar', 'Activo'),
('15', 'Rodrigo', 'Saul', '2024-10-31', 'Actualizacion de Base de datos', 'Cine', 'media', 'poooorfavooor', 'Activo'),
('16', 'Rodrigo', 'Saul', '2024-10-31', 'Actualizacion de Base de datos', 'EquipoDeOficina', 'media', 'locooooooooooooo', 'Activo'),
('16667', 'GUSTABO', 'Rafa', '2024-11-04', 'Actualizacion de Base de datos', 'EquipoDeOficina', 'media', 'MAMAHUEVO', 'Activo'),
('17', 'Rodrigo', 'sdsd', '2024-10-31', 'Actualizacion de Base de datos', 'Mariana PC', 'alta', 'locooooooooooooo2', 'Activo'),
('2', 'GUSTABO', 'Saul', '2024-09-12', '', '0', 'alta', 'Unos Pedillos', 'ACTIVO'),
('2541', 'GUSTABO', 'g', '2024-10-31', 'Actualizacion de Base de datos', 'EquipoDeOficina', 'media', 'viene viene', 'Activo'),
('25824', 'Rodrigo', 'Rafa', '2024-11-04', 'Actualizacion de Base de datos', 'Alexis PC', 'media', 'kokokok', 'Activo'),
('3', 'x', 'Rafa', '2024-09-27', 'Actualizacion de Base de datos', '0', 'alta', 'jejeeeeeeeeee', 'FINALIZADO'),
('4', 'GUSTABO', 'Rafa1', '2024-10-16', 'Actualizacion de Base de datos', 'Pc de Saul', 'alta', 'golazo', 'ACTIVO'),
('40634', 'GUSTABO', 'Rafa', '2024-11-04', 'Actualizacion de Base de datos', 'Alexis PC', 'media', 'MAMAHUEVO', 'Activo'),
('5', 'Luis', 'Rafa1', '2024-10-16', 'Actualizacion de Base de datos', 'Alexis PC', 'alta', 'jejeeeee', 'ACTIVO'),
('52691', 'GUSTABO', 'ccccc', '2024-11-05', 'Actualizacion de Base de datos', 'Cine', 'alta', 'MAMAHUEVO2', 'Activo'),
('6', 'lopez', 'Rafa1', '2024-10-16', 'Actualizacion de Base de datos', 'Alexis PC', 'media', 'jejeo', 'ACTIVO'),
('61596', 'Luis', 'Saul', '2024-11-05', 'Actualizacion de Base de datos', 'Alexis PC', 'alta', 'MAMAHUEVO', 'Activo'),
('7', 'GUSTABO', 'Saul', '2024-10-16', 'Actualizacion de Base de datos', 'Pc de Saul', 'media', 'prueba tarea/equipo', 'ACTIVO'),
('8', 'GUSTABO', 'sdsd', '2024-10-22', 'Actualizacion de Base de datos', 'EquipoDeJared', 'baja', 'ijijijijijij', 'Activo'),
('89038', 'Rodrigo', 'Rafa1', '2024-10-31', 'Actualizacion de Base de datos', 'EquipoDeJared', 'alta', 'jijijijja', 'Activo'),
('9', 'GUSTABO', 'g', '2024-10-22', 'Actualizacion de Base de datos', 'Cine', 'media', 'Pasado de uva', 'Activo'),
('96679', 'Rodrigo', 'Rafa1', '2024-10-31', 'Actualizacion de Base de datos', 'EquipoDeJared', 'alta', '96 pesos', 'Activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `colaboradores`
--
ALTER TABLE `colaboradores`
  ADD PRIMARY KEY (`idcolaborador`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `tabcliente`
--
ALTER TABLE `tabcliente`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Indices de la tabla `tablaequipos`
--
ALTER TABLE `tablaequipos`
  ADD PRIMARY KEY (`IdEquipo`);

--
-- Indices de la tabla `tabproducto`
--
ALTER TABLE `tabproducto`
  ADD PRIMARY KEY (`Idproducto`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id_tarea`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `colaboradores`
--
ALTER TABLE `colaboradores`
  MODIFY `idcolaborador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `Id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `tabcliente`
--
ALTER TABLE `tabcliente`
  MODIFY `id_cliente` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tablaequipos`
--
ALTER TABLE `tablaequipos`
  MODIFY `IdEquipo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `tabproducto`
--
ALTER TABLE `tabproducto`
  MODIFY `Idproducto` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
