package com.devsuperior.dsvendas.DTO;

import com.devsuperior.dsvendas.entities.Seller;

import java.io.Serializable;

public class SellerDTO  implements Serializable {
    // o serializeble é uma boa medida, vai garantir que a classe vai ser convertida para bytes
    private Long id;
    private String name;

    public SellerDTO(Long id, String name) {
        this.id = id;
        this.name = name;
    }
    public SellerDTO() {

    }
    //esse construtor serve para transformar uma entidade em DTO
    public SellerDTO(Seller entity) {
        this.id = entity.getId();
        this.name = entity.getName();
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
