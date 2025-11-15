package br.com.fecaf.controller;

import br.com.fecaf.model.Marca;
import br.com.fecaf.services.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/marcas")
@CrossOrigin(origins = "*")
public class MarcaController {

    @Autowired
    private MarcaService marcaService;

    // EndPoint para listar marcas
    @GetMapping("/listarMarcas")
    public List<Marca> listarMarcas () {
        return marcaService.listarMarcas();
    }

    // Faz um post / Insere uma marca
    @PostMapping("/cadastrarMarca")
    public ResponseEntity<Marca> salvarMarca(@RequestBody Marca marca) {
        Marca newMarca = marcaService.salvarMarca(marca);
        return ResponseEntity.status(HttpStatus.CREATED).body(newMarca);
    }
}
