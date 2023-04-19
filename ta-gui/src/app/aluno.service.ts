import { Aluno } from './aluno';

export class AlunoService {
  alunos: Aluno[] = [];
<<<<<<< Updated upstream
  gravar(aluno: Aluno): void {
     this.alunos.push(aluno);
  }
=======
  
  gravar(aluno: Aluno): Aluno | any{
    var result = null;
    if (this.cpfNaoCadastrado(aluno.cpf as string)) {
      this.alunos.push(aluno);
      result = aluno;
    }
    return result;
  }
    cpfNaoCadastrado(cpf: string): boolean {
     return !this.alunos.find(a => a.cpf == cpf);
  }
>>>>>>> Stashed changes
}