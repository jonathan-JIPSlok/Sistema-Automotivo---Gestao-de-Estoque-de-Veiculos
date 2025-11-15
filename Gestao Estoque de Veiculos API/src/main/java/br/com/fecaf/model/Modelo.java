package br.com.fecaf.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_modelos")
public class Modelo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_modelo")
    private int id;

    @Column(name = "modelo")
    private String modelo;

    // getters e setters

    public int getId() {
        return id;
    }

    public void setId(int id_modelo) {
        this.id = id_modelo;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

}
