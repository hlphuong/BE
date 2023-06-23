CREATE DATABASE  IF NOT EXISTS `grocery` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `grocery`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: grocery
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calendar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(45) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `id_nv` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar`
--

LOCK TABLES `calendar` WRITE;
/*!40000 ALTER TABLE `calendar` DISABLE KEYS */;
/*!40000 ALTER TABLE `calendar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ctdonhang`
--

DROP TABLE IF EXISTS `ctdonhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ctdonhang` (
  `id_hang` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `id_donhang` int(11) NOT NULL,
  KEY `ctdonhang_ibfk_2` (`id_hang`),
  KEY `ctdonhang_ibfk_3` (`id_donhang`),
  CONSTRAINT `ctdonhang_ibfk_2` FOREIGN KEY (`id_hang`) REFERENCES `mathang` (`ID`),
  CONSTRAINT `ctdonhang_ibfk_3` FOREIGN KEY (`id_donhang`) REFERENCES `donhang` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ctdonhang`
--

LOCK TABLES `ctdonhang` WRITE;
/*!40000 ALTER TABLE `ctdonhang` DISABLE KEYS */;
/*!40000 ALTER TABLE `ctdonhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donhang`
--

DROP TABLE IF EXISTS `donhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donhang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` datetime DEFAULT NULL,
  `id_KH` int(11) DEFAULT NULL,
  `id_NV` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_KH` (`id_KH`),
  KEY `id_NV` (`id_NV`),
  CONSTRAINT `donhang_ibfk_1` FOREIGN KEY (`id_KH`) REFERENCES `khachhang` (`id`),
  CONSTRAINT `donhang_ibfk_2` FOREIGN KEY (`id_KH`) REFERENCES `khachhang` (`id`),
  CONSTRAINT `donhang_ibfk_3` FOREIGN KEY (`id_NV`) REFERENCES `taikhoan` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donhang`
--

LOCK TABLES `donhang` WRITE;
/*!40000 ALTER TABLE `donhang` DISABLE KEYS */;
INSERT INTO `donhang` VALUES (1,'0000-00-00 00:00:00',1,1),(2,'0000-00-00 00:00:00',2,1),(3,'0000-00-00 00:00:00',3,1),(4,'0000-00-00 00:00:00',4,2);
/*!40000 ALTER TABLE `donhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sdt` varchar(50) DEFAULT NULL,
  `diem` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (1,'Nguyen Van A',11,'00221',1,'4433'),(2,'Nguyen B',14,'903024',1,'11144'),(3,'Tran C',22,'09422',1,'4443'),(4,'Le Thi B',25,'94022',1,'2222'),(5,'Nguyen C',34,'18402',1,'2334');
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mathang`
--

DROP TABLE IF EXISTS `mathang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mathang` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `image` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `brand` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `quanlity` int(11) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mathang`
--

LOCK TABLES `mathang` WRITE;
/*!40000 ALTER TABLE `mathang` DISABLE KEYS */;
INSERT INTO `mathang` VALUES (1,'Hộp quà',23000,'../../assets/user.png','việt nhật',300,'hộp'),(2,'Ốp điện thoại',30000,'05.jpg','akolo',230,'phụ kiện điện thoại'),(3,'Tai nghe',100000,NULL,'sony',120,'phụ kiện điện thoại'),(2147483647,'rockstar',434534,'undefined','rockstar',NULL,'');
/*!40000 ALTER TABLE `mathang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nganhhang`
--

DROP TABLE IF EXISTS `nganhhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nganhhang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nganhhang`
--

LOCK TABLES `nganhhang` WRITE;
/*!40000 ALTER TABLE `nganhhang` DISABLE KEYS */;
INSERT INTO `nganhhang` VALUES (1,'phụ kiện điện thoại',NULL),(2,'đồ điện tử',NULL),(3,'handmade',NULL),(4,'đồ dùng học tập',NULL),(5,'đồ dùng nhà bếp',NULL),(6,'đồ trang trí',NULL);
/*!40000 ALTER TABLE `nganhhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phanquyen`
--

DROP TABLE IF EXISTS `phanquyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phanquyen` (
  `id` int(11) NOT NULL,
  `mota` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phanquyen`
--

LOCK TABLES `phanquyen` WRITE;
/*!40000 ALTER TABLE `phanquyen` DISABLE KEYS */;
INSERT INTO `phanquyen` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `phanquyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `access` varchar(10) DEFAULT NULL,
  `matkhau` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `avar` varchar(100) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
INSERT INTO `taikhoan` VALUES (0,'Phương','0778559928',4,'tk01@gmail.com','admin','1','07.jpg',NULL),(1,'Hoang Linh Phuong','0222999333',12,'tk02@gmail.com','user','1','12.jpg',NULL),(2,'Nguyen Thi Tung','0002223333',12,'tk03@gmail.com','manager','1','14.jpg',NULL),(3,'Cersei Lannister','0003933848',20,'tk04@gmail.com','user','1','32.jpg',NULL),(11,'Phương','0778559928',13,'tk05@gmail.com','user','1','33.jpg',NULL),(12,'Phương','0778559928',12,'tk06@gmail.com','manager','1','09.jpg',NULL),(13,'Phương','0778559928',5,'tk07@gmail.com','admin','1',NULL,NULL),(14,'Hoang Phuong','0778559928',12,'tk08@gmail.com','user','1',NULL,NULL),(15,'Hoang Phuong','0778559928',12,'tk08@gmail.com','manager','1',NULL,NULL),(16,'Hoang Phuong','0778559928',12,'tk10@gmail.com','user','1',NULL,NULL),(17,'Hoang Phuong','0778559928',12,'tk11@gmail.com','user','1',NULL,NULL),(18,'Hoang Phuong','0778559928',12,'tk12@gmail.com','user','1',NULL,NULL),(19,'Hoang Phuong','0778559928',12,'tk13@gmail.com','user','1',NULL,NULL),(20,'Hoang Phuong','0778559928',12,'tk14@gmail.com','user','1',NULL,NULL),(21,'Hoang Phuong','0778559928',12,'tk15@gmail.com','user','1',NULL,NULL),(2147483647,'undefined',NULL,22,'Hlphuong150701@gmail.com','Học viện k','123456',NULL,NULL);
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-23  1:20:41
