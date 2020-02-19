import "uswds";
import { Component, h, Prop } from "@stencil/core";

const component = "usa-button";

@Component({
  tag: "usa-button",
  styleUrl: "../../uswds/src/stylesheets/packages/_usa-button.scss"
})
export class Button {
  @Prop() variant?:
    | "default"
    | "secondary"
    | "accent-cool"
    | "base"
    | "outline"
    | "outline-inverse";
  @Prop() size?: "big";
  @Prop() unstyled?: boolean;
  @Prop() disabled?: boolean;
  @Prop() hover?: boolean;
  @Prop() active?: boolean;
  @Prop() focused?: boolean;
  @Prop() href?: string;

  getClasses(): string {
    const classes: string[] = [component];

    if (this.size === "big") {
      classes.push(`${component}--big`);
    }

    switch (this.variant) {
      case undefined:
      case "default":
        break;
      case "secondary":
      case "accent-cool":
      case "base":
      case "outline":
        classes.push(`${component}--${this.variant}`);
        break;
      case "outline-inverse":
        classes.push(`${component}--outline ${component}--inverse`);
        break;
      default:
        throw new Error(
          `Invalid varient "${this.variant}" passed for component "${component}"`
        );
    }

    if (this.unstyled) {
      classes.push(`${component}--unstyled`);
    }

    if (this.hover) {
      classes.push(`${component}--hover`);
    }

    if (this.active) {
      classes.push(`${component}--active`);
    }

    if (this.focused) {
      classes.push(`${component}--focused`);
    }

    if (this.disabled) {
      classes.push(`${component}--disabled`);
    }

    return classes.join(" ");
  }

  render() {
    if (this.href) {
      return (
        <a class={this.getClasses()} href={this.href}>
          <slot />
        </a>
      );
    }
    return (
      <button class={this.getClasses()} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
