import { Aluno } from './aluno';

export class AlunoService {
  alunos: Aluno[] = [];
 gravar(aluno: Aluno): Aluno | null {
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
}