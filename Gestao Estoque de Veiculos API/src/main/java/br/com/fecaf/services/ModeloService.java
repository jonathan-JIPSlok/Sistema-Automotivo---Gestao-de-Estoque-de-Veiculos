package br.com.fecaf.services;

import br.com.fecaf.model.Modelo;
import br.com.fecaf.repository.ModeloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModeloService {

    @Autowired
    private ModeloRepository modeloRepository;

    // Método para listar Modelos
    public List<Modelo> listarModelos() {
        return modeloRepository.findAll();
    }

    // Método para inserir modelo no DataBase
    public Modelo salvarModelo(Modelo modelo) {
        return modeloRepository.save(modelo);
    }
}