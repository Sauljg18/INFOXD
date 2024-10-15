-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-10-2024 a las 23:17:58
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

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tabproducto`
--
ALTER TABLE `tabproducto`
  ADD PRIMARY KEY (`Idproducto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tabproducto`
--
ALTER TABLE `tabproducto`
  MODIFY `Idproducto` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
