package br.com.fecaf.controller;

import br.com.fecaf.model.StatusDisponibilidade;
import br.com.fecaf.model.Veiculo;
import br.com.fecaf.services.MarcaService;
import br.com.fecaf.services.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/veiculos")
@CrossOrigin(origins = "*")
public class VeiculoController {

    @Autowired
    private VeiculoService veiculoService;
    @Autowired
    private MarcaService marcaService;

    //endpoint para listar veiculos
    @GetMapping("/listarVeiculos")
    public List<Veiculo> listarVeiculos(){
        return veiculoService.listarVeiculos();
    }

    // Pega veiculo por id
    @GetMapping("/listarVeiculo/{id}")
    public ResponseEntity<Veiculo> listarVeiculoPorId(@PathVariable int id) {
        Veiculo veiculo = veiculoService.listarVeiculosById(id);

        if (veiculo != null) {
            return ResponseEntity.ok(veiculo);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    //Listar veiculos por ano
    @GetMapping("/listarVeiculos/ano={ano}")
    public List<Veiculo> listarVeiculosPorAno(@PathVariable Integer ano){
        return veiculoService.listarVeiculosPorAno(ano);
    }

    // Listar veiculos por preco
    @GetMapping("/listarVeiculos/preco={preco}")
    public List<Veiculo> listarVeiculosPorPreco(@PathVariable Integer preco){
        return veiculoService.listarVeiculosPorPreco(preco);
    }

    // Listar veiculos por status de disponibilidade
    @GetMapping("/listarVeiculos/StatusDisponibilidade={status}")
    public List<Veiculo> listarVeiculosPorStatusDisponibilidade(@PathVariable StatusDisponibilidade status) {
        return veiculoService.listarVeiculosPorStatusDisponibilidade(status);
    }

    // Listar por modelo
    @GetMapping("/listarVeiculos/modelo={modelo}")
    public List<Veiculo> listarVeiculosPorModelo(@PathVariable String modelo) {
        return veiculoService.listarVeiculosPorModelo(modelo);
    }

    // Listar por marca
    @GetMapping("/listarVeiculos/marca={marca}")
    public List<Veiculo> listarVeiculosPorMarca(@PathVariable String marca) {
        return veiculoService.listarVeiculosPorMarca(marca);
    }

    // Faz um Post
    @PostMapping("/cadastrarVeiculo")
    public ResponseEntity<Veiculo> salvarVeiculo(@RequestBody Veiculo veiculo) {
        Veiculo newVeiculo = veiculoService.salvarVeiculo(veiculo);
        return ResponseEntity.status(HttpStatus.CREATED).body(newVeiculo);
    }

    // Deleta um veiculo
    @DeleteMapping("/deletarVeiculo/{id}")
    public ResponseEntity<Void> deletarContato (@PathVariable int id) {
        Veiculo veiculo = veiculoService.listarVeiculosById(id);
        if (veiculo == null) {
            return ResponseEntity.notFound().build(); // 404 se não encontrar
        }
        else if (veiculo.getStatusDisponibilidade() == StatusDisponibilidade.VENDIDO || veiculo.getStatusDisponibilidade() == StatusDisponibilidade.DESCONTINUADO) {
            veiculoService.deletarVeiculo(id);
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        } else {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

    }

    // Atualiza um veiculo
    @PutMapping("/atualizarVeiculo/id={id}")
    public ResponseEntity<Veiculo> atualizarVeiculo(@PathVariable int id, @RequestBody Veiculo veiculo) {
        Veiculo veiculoAtualizado =  veiculoService.atualizarVeiculo(id, veiculo);

        if (veiculoAtualizado != null) {
            return ResponseEntity.ok(veiculoAtualizado);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
