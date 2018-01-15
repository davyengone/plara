// G -> C
// C -> G
// T -> A
// A -> U
export class Transcriptor {
    private G = 'C';
    private C = 'G';
    private T = 'A';
    private A = 'U';
    toRna(dna: string): string {
        if([...dna].filter(str => !this[str]).length > 0){
            throw new Error("Invalid input DNA");
        }

        return [...dna].map(str => this[str]).join('');
    }
}