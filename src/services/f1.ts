export async function getCalendar(year: string = "current") {
  try {
    const response = await fetch(`https://api.jolpi.ca/ergast/f1/${year}.json`, {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error("Falha ao buscar calendário");
    }

    const data = await response.json();
    return data.MRData.RaceTable.Races;
  } catch (error) {
    console.error("Erro ao carregar calendário:", error);
    return [];
  }
}