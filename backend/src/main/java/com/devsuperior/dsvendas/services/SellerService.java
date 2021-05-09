package com.devsuperior.dsvendas.services;

import com.devsuperior.dsvendas.DTO.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

//registar como um componente do sistema, com isso vai poder injetar em outros
@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<SellerDTO> findAll(){
        List<Seller> result = sellerRepository.findAll();
        //para cada x o map pega a coleção do objeto original , para uma nova coleção de outro tipo
        return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList()); //converte o x em um dto
    }
}
