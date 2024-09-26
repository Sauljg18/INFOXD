-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-09-2024 a las 16:54:37
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
CREATE DATABASE IF NOT EXISTS `infoenlace` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `infoenlace`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colaboradores`
--

CREATE TABLE `colaboradores` (
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

INSERT INTO `colaboradores` (`nombre`, `usuario`, `correo`, `cargo`, `contacto`, `acceso`, `contrasena`, `confirmar`, `checar`, `valor`, `foto`) VALUES
('Rafa', 'Uwu', 'rafa@gmail.com', 'volvo', 998957662, 'usuario', '123456', '123456', 'auto', 42, 'Sousou-no-Frieren.jpg'),
('Saul', 'Sauljg', 'sauljeje@gmail.com', 'volvo', 98555412, 'admin', '123456789', '123456789', 'auto', 32, 'dragon-ball-fighterz-logo-2B22AC6F48-seeklogo.com.png'),
('Rafa1', 'aguaUwu', 'uwu@gmail.com', 'volvo', 998957662, 'super', '12345678', '12364587', 'manual', 787798, ''),
('Rafa', 'Uwu', 'rafa@gmail.com', 'administrador', 99895471, 'supervisor', '12345678', '12364587', 'auto', 42, 'dragon-ball-fighterz-logo-2B22AC6F48-seeklogo.com.png'),
('sdsd', 'admon.info', 'djeidj', 'administrador', 79878744, 'supervisor', '12345678', '12364587', 'manual', 42, '6c79d385bfdc8def563ea5bce8dc2d23.png'),
('ccccc', 'ccc', 'cccc', 'administrador', 0, 'administrador', 'cdcdc', 'cxcx', 'auto', 444, ''),
('g', 'Uwu', 'senajaja@gmail.com', 'supervisor', 7879848, 'supervisor', 'wdwddwd', 'dwdwdwd', 'manual', 34, '6c79d385bfdc8def563ea5bce8dc2d23.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabcliente`
--

CREATE TABLE `tabcliente` (
  `Id_colaborador` int(10) NOT NULL,
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

INSERT INTO `tabcliente` (`Id_colaborador`, `nombre`, `identificacion`, `razon`, `codigoext`, `telefonocorp`, `correocliente`, `cliente`, `responsable`, `observacion`, `postal`, `direccion`, `num_ext`, `num_int`, `region`, `ciudad`, `estado`) VALUES
(1, 'x', 0, '3', 77534, 2147483647, 'dewer@gmail.com', 'duudud', 'd', 'd', 77534, 'av. kibi', 0, 0, 'quintana roo', 'CANCUN', 'quintana roo'),
(2, 'GUSTABO', 0, 'PDO', 22321, 99857472, 'jorge@gmail.com', 'dingon', 'ojo', 'wuapo', 76654, 'av.colav', 0, 0, 'quintana roo', 'CANCUN', 'quintana roo'),
(3, 'lopez', 0, 'fjejd', 5311, 9987948, 'sifi@gmail.com', 'fufu', 'fheudcc', 'finjicnudnc', 784521, 'av. pupu', 0, 0, 'quintana roo', 'CANCUN', 'quintana roo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tareas`
--

CREATE TABLE `tareas` (
  `id_tarea` int(100) NOT NULL,
  `cliente` text NOT NULL,
  `colaborador` text NOT NULL,
  `fecha` date NOT NULL,
  `hora` time(6) NOT NULL,
  `tipo` text NOT NULL,
  `prioridad` text NOT NULL,
  `descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tareas`
--

INSERT INTO `tareas` (`id_tarea`, `cliente`, `colaborador`, `fecha`, `hora`, `tipo`, `prioridad`, `descripcion`) VALUES
(1, 'GUSTABO', 'Saul', '2024-09-12', '00:00:00.000000', '', 'alta', 'Unos Pedillos'),
(2, 'GUSTABO', 'Saul', '2024-09-12', '23:43:00.000000', '', 'alta', 'Unos Pedillos'),
(3, 'x', 'Rafa', '2024-09-27', '20:44:00.000000', 'Actualizacion de Base de datos', 'alta', 'jejeeeeeeeeee');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tabcliente`
--
ALTER TABLE `tabcliente`
  ADD PRIMARY KEY (`Id_colaborador`);

--
-- Indices de la tabla `tareas`
--
ALTER TABLE `tareas`
  ADD PRIMARY KEY (`id_tarea`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabcliente`
--
ALTER TABLE `tabcliente`
  MODIFY `Id_colaborador` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tareas`
--
ALTER TABLE `tareas`
  MODIFY `id_tarea` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
