#!/bin/sh

GEN_TYPES_TARGET=${GEN_TYPES_TARGET:-$NX_WORKSPACE_ROOT/apps/ziyo-fe/src/__autogen__/backend.d.ts}
GEN_TYPES_TSCONFIG_PATH=${GEN_TYPES_TSCONFIG_PATH:-$NX_WORKSPACE_ROOT/apps/ziyo-be/tsconfig.app.json}

echo "🔥 Generating API types..."

# Generate types
pnpm tsc --project $GEN_TYPES_TSCONFIG_PATH --declaration --emitDeclarationOnly --verbatimModuleSyntax false --outFile $GEN_TYPES_TARGET

# Inject ignore eslint errors
echo -e "/* eslint-disable */\n$(cat $GEN_TYPES_TARGET)" > $GEN_TYPES_TARGET

echo "✅ Done!"