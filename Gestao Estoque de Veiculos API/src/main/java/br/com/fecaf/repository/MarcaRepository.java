package br.com.fecaf.repository;

import br.com.fecaf.model.Marca;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MarcaRepository extends JpaRepository<Marca, Integer> {
    List<Marca> findByNome(String nome);
}
