CREATE DATABASE IF NOT EXISTS automotive_sistem;
USE automotive_sistem;

CREATE TABLE tbl_marcas (
                            id_marca INT NOT NULL AUTO_INCREMENT,
                            nome VARCHAR(45) NOT NULL,
                            PRIMARY KEY (id_marca)
);

CREATE TABLE tbl_modelos (
                             id_modelo INT NOT NULL AUTO_INCREMENT,
                             modelo VARCHAR(45) NOT NULL,
                             PRIMARY KEY (id_modelo)
);

CREATE TABLE tbl_veiculos (
                              id_veiculo INT NOT NULL AUTO_INCREMENT,
                              ano INT NOT NULL,
                              cor VARCHAR(2) NOT NULL,
                              preco DECIMAL NOT NULL,
                              quilometragem INT NOT NULL,
                              status_disponibilidade VARCHAR(45) NOT NULL,
                              id_marca_FK INT NOT NULL,
                              id_modelo_FK INT NOT NULL,
                              PRIMARY KEY (id_veiculo),
                              FOREIGN KEY (id_marca_FK)
                                  REFERENCES tbl_marcas (id_marca),
                              FOREIGN KEY (id_modelo_FK)
                                  REFERENCES tbl_modelos (id_modelo)
);

show tables;

insert into tbl_marcas(nome) values("honda");
insert into tbl_marcas(nome) values("Mercedes Bens");
insert into tbl_marcas(nome) values("Fiat");

insert into tbl_modelos(modelo) values("Uno");
insert into tbl_modelos(modelo) values("ônibus");
insert into tbl_modelos(modelo) values("Fan 160");

insert into tbl_veiculos(ano, cor, preco, quilometragem, status_disponibilidade, id_marca_FK, id_modelo_FK) values (
                                                                                                                       2020,
                                                                                                                       "PT",
                                                                                                                       200000,
                                                                                                                       0,
                                                                                                                       "DISPONIVEL",
                                                                                                                       3,
                                                                                                                       1
                                                                                                                   );
insert into tbl_veiculos(ano, cor, preco, quilometragem, status_disponibilidade, id_marca_FK, id_modelo_FK) values (
                                                                                                                       1990,
                                                                                                                       "AM",
                                                                                                                       20000000,
                                                                                                                       0,
                                                                                                                       "DISPONIVEL",
                                                                                                                       2,
                                                                                                                       2
                                                                                                                   );
insert into tbl_veiculos(ano, cor, preco, quilometragem, status_disponibilidade, id_marca_FK, id_modelo_FK) values (
                                                                                                                       2000,
                                                                                                                       "VD",
                                                                                                                       40000,
                                                                                                                       0,
                                                                                                                       "DISPONIVEL",
                                                                                                                       1,
                                                                                                                       3
                                                                                                                   );

SELECT
    *
FROM
    tbl_veiculos;