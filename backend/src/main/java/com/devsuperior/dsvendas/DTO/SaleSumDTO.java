package com.devsuperior.dsvendas.DTO;

import com.devsuperior.dsvendas.entities.Seller;

import java.io.Serializable;

public class SaleSumDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private  String SellerName;
    private double sum;

    public SaleSumDTO(Seller seller, double sum) {
        SellerName = seller.getName();
        this.sum = sum;
    }

    public SaleSumDTO() {

    }

    public String getSellerName() {
        return SellerName;
    }

    public void setSellerName(String sellerName) {
        SellerName = sellerName;
    }

    public double getSum() {
        return sum;
    }

    public void setSum(double sum) {
        this.sum = sum;
    }
}
