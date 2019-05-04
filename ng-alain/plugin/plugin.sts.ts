import {
  apply,
  chain,
  mergeWith,
  move,
  url,
  MergeStrategy,
  Rule,
  SchematicContext,
  Tree,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addPackageToPackageJson, removePackageFromPackageJson } from '../utils/json';
import { PluginOptions } from './interface';

function fixPackage(options: PluginOptions) {
  return (host: Tree) => {
    (options.type === 'add' ? addPackageToPackageJson : removePackageFromPackageJson)(
      host,
      ['ng-alain-sts@DEP-7.3.2'],
      'devDependencies',
    );
  };
}

function fixFiles() {
  return chain([mergeWith(apply(url('./files/sts'), [move('/_cli-tpl')]), MergeStrategy.Overwrite)]);
}

function installPackages() {
  return (_host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
  };
}

export function pluginSTS(options: PluginOptions): Rule[] {
  return [fixPackage(options), fixFiles(), installPackages()];
}
