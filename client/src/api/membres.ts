
export type TMembres = {
    _id: string,
    name:string,
    username: string,
    statut: string,
    participe: true
  }

export async function getMembres(): Promise<TMembres[]> {
  const response = await fetch("localhost:5000/membres");
  return response.json();
}