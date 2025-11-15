package br.com.fecaf.model;

import jakarta.persistence.*;

@Entity
@Table(name = "tbl_veiculos")
public class Veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_veiculo")
    private int idVeiculo;

    private int ano;

    @Column(name = "cor")
    private String cor;

    @Column(name = "preco")
    private int preco;

    @Column(name = "quilometragem")
    private int quilometragem;

    @Enumerated(EnumType.STRING)
    @Column(name = "status_disponibilidade")
    private StatusDisponibilidade statusDisponibilidade;

    @ManyToOne
    @JoinColumn(name = "id_marca_FK", nullable = false)
    private Marca marca;

    @ManyToOne
    @JoinColumn(name = "id_modelo_FK", nullable = false)
    private Modelo modelo;

    // getters e setters

    public int getIdVeiculo() {
        return idVeiculo;
    }

    public void setIdVeiculo(int id_veiculo) {
        this.idVeiculo = id_veiculo;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }

    public int getQuilometragem() {
        return quilometragem;
    }

    public void setQuilometragem(int quilometragem) {
        this.quilometragem = quilometragem;
    }

    public StatusDisponibilidade getStatusDisponibilidade() {
        return statusDisponibilidade;
    }

    public void setStatusDisponibilidade(StatusDisponibilidade statusDisponibilidade) {
        this.statusDisponibilidade = statusDisponibilidade;
    }

    public Marca getMarca() {
        return marca;
    }

    public void setMarca(Marca marca) {
        this.marca = marca;
    }

    public Modelo getModelo() {
        return modelo;
    }

    public void setModelo(Modelo modelo) {
        this.modelo = modelo;
    }
}


