import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { CategoriaModule } from '../categoria/categoria.module';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  providers: [ProdutoService],
  controllers: [ProdutoController],
  exports: [ProdutoService],
})
export class ProdutoModule {}
