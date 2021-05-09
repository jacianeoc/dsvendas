package com.devsuperior.dsvendas.services;

import com.devsuperior.dsvendas.DTO.SaleDTO;
import com.devsuperior.dsvendas.DTO.SellerDTO;
import com.devsuperior.dsvendas.entities.Sale;

import com.devsuperior.dsvendas.repositories.SaleRepository;

import com.devsuperior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class SaleService {


    @Autowired
    private SaleRepository saleRepository;

    @Autowired
    private SellerRepository sellerRepository;

    @Transactional(readOnly = true) //isso vai garantir que toda a operação com o banco seja resolvida toda aqui no service
    // e o readOnly = true é para que ele não precise fazer lock do banco, jpa que é apenas uma operação de leitura
    public Page<SaleDTO> findAll(Pageable pageable){
        //antes de buscar a pagina, irá buscar todos os vendedores, com isso, se evita a interação
        //repetidas ao banca de dados
        sellerRepository.findAll();// vai trazer para memoria, a jpa, vai armezar isso em cache e quando for buscar, ele
        //já vai está em memoria
        Page<Sale> result = saleRepository.findAll(pageable);
        //para cada x o map pega a coleção do objeto original , para uma nova coleção de outro tipo
        return result.map(x -> new SaleDTO(x)); //converte o x em um dto
    }



}
