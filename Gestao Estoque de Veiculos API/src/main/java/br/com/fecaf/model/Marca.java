package br.com.fecaf.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_marcas")
public class Marca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_marca") // corresponde à coluna do banco
    private int id;

    @Column(name = "nome") //garante alinhamento
    private String nome;

    // getters e setters

    public int getId() {
        return id;
    }

    public void setId(int id_marca) {
        this.id = id_marca;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


}
