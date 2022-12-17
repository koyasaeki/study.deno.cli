import { Command } from "https://deno.land/x/cliffy@v0.25.5/command/mod.ts";

await new Command()
  .name("cliffy")
  .version("0.1.0")
  .description("Command line framework for Deno")
  .parse(Deno.args);
