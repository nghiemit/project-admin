declare module "*.svg?react" {
    import * as React from "react";
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement> & { className?: string }>;
    export { ReactComponent };
    export default ReactComponent;
}