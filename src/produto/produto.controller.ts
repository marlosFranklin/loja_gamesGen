import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Get('/descricao/:descricao')
  @HttpCode(HttpStatus.OK)
  findAllByDescricao(
    @Param('descricao') descricao: string,
  ): Promise<Produto[]> {
    return this.produtoService.findAllByDescricao(descricao);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createProduto(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.createProduto(produto);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  updateProduto(@Body() produto: Produto): Promise<Produto> {
    return this.produtoService.updateProduto(produto);
  }
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.produtoService.delete(id);
  }
}
