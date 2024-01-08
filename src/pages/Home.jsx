import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">HALAMANBERANDA</Link>
        </li>
        <li>
          <Link to="/halamanberanda">HALAMANBERANDA</Link>
        </li>
        <li>
          <Link to="/halamantentangdesa">HALAMANTENTANGDESA</Link>
        </li>
        <li>
          <Link to="/halamandemografis">HALAMANDEMOGRAFIS</Link>
        </li>
        <li>
          <Link to="/halamanstrukturdesa">HALAMANSTRUKTURDESA</Link>
        </li>
        <li>
          <Link to="/halamanperangkatdesa">HALAMANPERANGKATDESA</Link>
        </li>
        <li>
          <Link to="/halamanlembagadesa">HALAMANLEMBAGADESA</Link>
        </li>
        <li>
          <Link to="/lembagaone">LEMBAGAOne</Link>
        </li>
        <li>
          <Link to="/kepaladesa">KEPALADESA</Link>
        </li>
        <li>
          <Link to="/perangkatdesaone">PERANGKATDESAOne</Link>
        </li>
        <li>
          <Link to="/pengumuman">PENGUMUMAN</Link>
        </li>
        <li>
          <Link to="/isipengumumanone">ISIPENGUMUMANOne</Link>
        </li>
        <li>
          <Link to="/isipengumumantwo">ISIPENGUMUMANTwo</Link>
        </li>
        <li>
          <Link to="/agendakegiatan">AGENDAKEGIATAN</Link>
        </li>
        <li>
          <Link to="/agendakegiatanone">AGENDAKEGIATANOne</Link>
        </li>
        <li>
          <Link to="/agendakegiatantwo">AGENDAKEGIATANTwo</Link>
        </li>
        <li>
          <Link to="/galeridesa">GALERIDESA</Link>
        </li>
        <li>
          <Link to="/beritadesaone">BERITADESAOne</Link>
        </li>
        <li>
          <Link to="/beritadesa">BERITADESA</Link>
        </li>
        <li>
          <Link to="/destinasiwisata">DESTINASIWISATA</Link>
        </li>
        <li>
          <Link to="/destinasiwisataone">DESTINASIWISATAOne</Link>
        </li>
        <li>
          <Link to="/download">DOWNLOAD</Link>
        </li>
        <li>
          <Link to="/halamanlogin">HalamanLogin</Link>
        </li>
        <li>
          <Link to="/halamanlupapassword">HalamanLupaPassword</Link>
        </li>
        <li>
          <Link to="/halamandashboard">HalamanDashboard</Link>
        </li>
        <li>
          <Link to="/halamanubahprofile">HalamanUbahProfile</Link>
        </li>
        <li>
          <Link to="/artikel">Artikel</Link>
        </li>
        <li>
          <Link to="/daftarartikel">DaftarArtikel</Link>
        </li>
        <li>
          <Link to="/kategoriartikel">KategoriArtikel</Link>
        </li>
        <li>
          <Link to="/kategoritag">KategoriTag</Link>
        </li>
        <li>
          <Link to="/galeri">Galeri</Link>
        </li>
        <li>
          <Link to="/editsejarahdesa">EditSejarahDesa</Link>
        </li>
        <li>
          <Link to="/jabatan">Jabatan</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
