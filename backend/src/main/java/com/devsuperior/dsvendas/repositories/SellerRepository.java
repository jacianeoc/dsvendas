package com.devsuperior.dsvendas.repositories;
//repository é um objeto que faz operaçoes de acesso a dados

import com.devsuperior.dsvendas.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long>{

}
