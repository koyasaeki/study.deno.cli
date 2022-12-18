import { Command } from "https://deno.land/x/cliffy@v0.25.5/command/mod.ts";

const { args, options } = await new Command()
  .name("cliffy")
  .version("0.1.0")
  .description("Command line framework for Deno")
  .usage("[options] [script] [script options]")
  .globalOption("-d, --debug", "Enable debug output.")
  .action((_options, ..._args) => console.log("Main command called"))
  // Child command 1.
  .command("foo", "Foo sub-command/")
  .option("-f, --foo", "Foo option.")
  .arguments("<value:string>")
  .action((_options, ...__args) => console.log("Foo command called."))
  // Child command 2.
  .command("bar", "Bar sub-command.")
  .option("-b, --bar", "Bar option.")
  .arguments("<input:string> [output:string]")
  .action((_options, ..._args) => console.log("Bar command called."))
  // Child command 3.
  .command("remove", "Remove directories.")
  .arguments("<dirs...>")
  // Child command 4.
  .command("option", "Option sample command.")
  .option("-f, --file <path:string>", "Force option.")
  .parse(Deno.args);

console.log(args);
console.log(options);
