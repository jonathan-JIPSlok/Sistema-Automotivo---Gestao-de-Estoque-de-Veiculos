package br.com.fecaf.services;

import br.com.fecaf.model.Marca;
import br.com.fecaf.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarcaService {

    @Autowired
    private MarcaRepository marcaRepository;

    // método para listar marcas
    public List<Marca> listarMarcas() { return marcaRepository.findAll(); }

    // Inserção de uma nova marca no DataBase
    public Marca salvarMarca(Marca marca) {
        return marcaRepository.save(marca);
    }

}
