import pgStructure from "pg-structure";
async function demo() {
  const db = await pgStructure(
    { database: "xxx", user: "xxx", password: "xxx", port: 1205}
    );
}

demo()
