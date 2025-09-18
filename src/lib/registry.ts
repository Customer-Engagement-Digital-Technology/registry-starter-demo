import registry from "@/registry";

export interface Component {
  name: string;
  type: string;
  title: string;
  description?: string;
  files?: { path: string; type: string; target: string }[];
}

export function getRegistryItems(): Component[] {
  // Exclude style items but keep all components of each type
  const components = (registry.items as Component[]).filter(
    (item) => item.type !== "registry:style",
  );

  return components;
}

export function getRegistryItem(name: string): Component {
  const components = getRegistryItems();

  const component = components.find(
    (item: { name: string }) => item.name === name,
  );

  if (component == null) {
    throw new Error(`Component "${name}" not found`);
  }

  return component;
}

export function getBlocks() {
  return getRegistryItems().filter(
    (component) => component.type === "registry:block",
  );
}

export function getUIPrimitives() {
  return getRegistryItems().filter(
    (component) => component.type === "registry:ui",
  );
}

export function getComponents() {
  return getRegistryItems().filter(
    (component) => component.type === "registry:component",
  );
}
