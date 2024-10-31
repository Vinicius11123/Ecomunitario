-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Tempo de geração: 31/10/2024 às 09:37
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `artemisdb`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `artemisusers`
--

CREATE TABLE `artemisusers` (
  `id` int(11) NOT NULL,
  `Nome` varchar(40) NOT NULL,
  `CPF` varchar(40) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `DatadeNascimento` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `artemisusers`
--

INSERT INTO `artemisusers` (`id`, `Nome`, `CPF`, `Email`, `DatadeNascimento`) VALUES
(3, 'Vinicius', '412.412.367-12', 'ViniciusDoido@gmail.com', '29/12/2004'),
(4, 'dasdasdas', '123.123.123-12', '54123412@fasfdasd', '12/31/2321');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `artemisusers`
--
ALTER TABLE `artemisusers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `artemisusers`
--
ALTER TABLE `artemisusers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
