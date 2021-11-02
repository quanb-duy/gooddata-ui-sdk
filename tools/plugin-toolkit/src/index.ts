// (C) 2021 GoodData Corporation

import { Command, OptionValues, program } from "commander";
import * as pkg from "../package.json";
import { addPluginCmdAction } from "./addPluginCmd";
import { initCmdAction } from "./initCmd";
import { usePluginCmdAction } from "./usePluginCmd";

program
    .version(pkg.version)
    .name("GoodData Plugin Development Toolkit")
    .option("--accept-untrusted-ssl", "Allows to run the tool with host, that has untrusted ssl certificate")
    .option("--hostname <hostname>", "URL of your GoodData host");

const dashboardCmd = program
    .command("dashboard-plugin")
    .description("Commands to work with dashboard plugins.");

const initCmd: Command = dashboardCmd
    .command("init")
    .description("Initialize a new dashboard plugin")
    .argument("[plugin-name]", "Name of the plugin to create")
    .option(
        "--target-dir <path>",
        "Path to the directory to create the plugin in. If not " +
            "specified, program will create a new subdirectory with name derived from plugin name in the current working directory.",
    )
    .option("--skip-install", "Skip yarn installing the plugin dependencies", false)
    .option(
        "--backend <backend>",
        "Type of backend that this plugin targets, either GoodData Platform (bear) or GoodData.CN (tiger)",
    )
    .option("--flavor <flavor>", "Language flavor of the plugin, either TypeScript (ts) or JavaScript (js)")
    .action(async (pluginName) => {
        acceptUntrustedSsl(program.opts());

        return initCmdAction(pluginName, {
            programOpts: program.opts(),
            commandOpts: initCmd.opts(),
        });
    });

const addPluginCmd: Command = dashboardCmd
    .command("store")
    .description("Store plugin in a workspace so that it can be used on the dashboards in that workspace.")
    .option("--username <email>", "Your username that you use to log in to GoodData platform.")
    .option("--workspace-id <id>", "Workspace id to which you want to add the plugin.")
    .action(async () => {
        acceptUntrustedSsl(program.opts());

        return addPluginCmdAction({
            programOpts: program.opts(),
            commandOpts: addPluginCmd.opts(),
        });
    });

const usePluginCmd: Command = dashboardCmd
    .command("use")
    .argument("[plugin-id]", "Plugin id which you want to use on the dashboard.")
    .option("--username <email>", "Your username that you use to log in to GoodData platform.")
    .option("--workspace-id <id>", "Workspace id that contains dashboard that should use the plugin.")
    .option("--dashboard-id <id>", "Dashboard id on which you want to use the plugin.")
    .option(
        "--with-parameters",
        "Tool will prompt for parameters that will be passed to plugin during initialization.",
    )
    .description("Use plugin available in a workspace on a dashboard.")
    .action(async () => {
        acceptUntrustedSsl(program.opts());

        return usePluginCmdAction({
            programOpts: program.opts(),
            commandOpts: usePluginCmd.opts(),
        });
    });

program.parse(process.argv);

function acceptUntrustedSsl(options: OptionValues) {
    if (options.acceptUntrustedSsl) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
}
