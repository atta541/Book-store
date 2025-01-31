import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async getAllBooks() {
    return this.booksService.findAll();
  }

  @Get(':id')
  async getBookById(@Param('id') id: string) {
    return this.booksService.findOne(id); 
  }

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  async deleteBook(@Param('id') id: string) {
    return this.booksService.delete(id);
  }
}
