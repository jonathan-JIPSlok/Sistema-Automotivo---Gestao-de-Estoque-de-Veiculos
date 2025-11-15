package br.com.fecaf.controller;

import br.com.fecaf.model.Modelo;
import br.com.fecaf.services.ModeloService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/modelo")
@CrossOrigin(origins = "*")
public class ModeloController {

    @Autowired
    private ModeloService modeloService;

    // End point para listar modelos
    @GetMapping("/listarModelos")
    public List<Modelo> listarModelos() {
        return modeloService.listarModelos();
    }

    // Inserir um novo modelo
    @PostMapping("/cadastrarModelo")
    public ResponseEntity<Modelo> cadastrarModelo(@RequestBody Modelo modelo) {
        Modelo newModelo = modeloService.salvarModelo(modelo);
        System.out.println(modelo);
        return ResponseEntity.status(HttpStatus.CREATED).body(newModelo);
    }
}
