package br.com.fecaf.services;

import br.com.fecaf.model.Marca;
import br.com.fecaf.model.Modelo;
import br.com.fecaf.model.StatusDisponibilidade;
import br.com.fecaf.model.Veiculo;
import br.com.fecaf.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    // método para listar veiculos
    public List<Veiculo> listarVeiculos() {
        return veiculoRepository.findAll();
    }

    // Pegar ID
    public Veiculo listarVeiculosById(int id) {
        return veiculoRepository.findById(id).orElse(null);
    }

    // Listar por ano
    public List<Veiculo> listarVeiculosPorAno (int ano) {
        return veiculoRepository.findByAno(ano);
    }

    // Listar por cor
    public List<Veiculo> listarVeiculosPorCor(String cor) {
        if (cor != null) {
            return veiculoRepository.findByCor(cor);
        } else {
            return veiculoRepository.findAll();
        }
    };

    // Listar por preco
    public List<Veiculo> listarVeiculosPorPreco(int preco) {
        return veiculoRepository.findByPreco(preco);
    }

    // Listar por quilometragem
    public List<Veiculo> listarVeiculosPorQuilometragem(int quilometragem) {
        return veiculoRepository.findByQuilometragem(quilometragem);
    }

    // Listar por Status de disponibilidade
    public List<Veiculo> listarVeiculosPorStatusDisponibilidade(StatusDisponibilidade statusDisponibilidade) {
        if (statusDisponibilidade != null) {
            return veiculoRepository.findByStatusDisponibilidade(statusDisponibilidade);
        } else {
            return veiculoRepository.findAll();
        }
    }

    // Listar por modelo
    public List<Veiculo> listarVeiculosPorModelo(String modelo) {
        return veiculoRepository.findByModelo_Modelo(modelo);
    }

    // Listar por marca
    public List<Veiculo> listarVeiculosPorMarca(String marca) {
        return veiculoRepository.findByMarca_Nome(marca);
    }

    //Inserção de um novo veiculo no DataBase.
    public Veiculo salvarVeiculo(Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    // método para deletar Veiculo
    public void deletarVeiculo(int id) {
        veiculoRepository.deleteById(id);
    }

    // Atualizar Veiculo
    public Veiculo atualizarVeiculo(Integer id, Veiculo veiculo) {
        Optional<Veiculo> veiculoExistente = veiculoRepository.findById(id);

        if (veiculoExistente.isPresent()) {
            Veiculo veiculoAtualizado = veiculoExistente.get();
            veiculoAtualizado.setPreco(veiculo.getPreco());
            veiculoAtualizado.setQuilometragem(veiculo.getQuilometragem());
            veiculoAtualizado.setStatusDisponibilidade(veiculo.getStatusDisponibilidade());
            return  veiculoRepository.save(veiculoAtualizado); // Salva o Veiculo atualizado
        } else {
            return null; // Retorna null se o veiculo não for encontrado
        }

    }
}
