package br.com.fecaf.repository;

import br.com.fecaf.model.Marca;
import br.com.fecaf.model.Modelo;
import br.com.fecaf.model.StatusDisponibilidade;
import br.com.fecaf.model.Veiculo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VeiculoRepository extends JpaRepository<Veiculo, Integer> {
    List<Veiculo> findByIdVeiculo(int id);
    List<Veiculo> findByAno(int ano);
    List<Veiculo> findByCor(String cor);
    List<Veiculo> findByPreco(int preco);
    List<Veiculo> findByQuilometragem(int quilometragem);
    List<Veiculo> findByStatusDisponibilidade(StatusDisponibilidade statusDisponibilidade);
    List<Veiculo> findByMarca_Nome(String marca);
    List<Veiculo> findByModelo_Modelo(String modelo);
}
