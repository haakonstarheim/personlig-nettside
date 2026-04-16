#!/bin/bash
cd "$(dirname "$0")"
echo "🚀 Oppdaterer nettsiden..."
git add .
git commit -m "Oppdatering $(date '+%Y-%m-%d %H:%M')"
git push
echo ""
echo "✅ Ferdig! Netlify bygger siden nå."
echo "Trykk en tast for å lukke..."
read -n 1
