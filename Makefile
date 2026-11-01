.PHONY: status logs

NAMESPACE    ?= bible
KUBE_CONTEXT ?= dev
KUBECTL       = kubectl --context $(KUBE_CONTEXT)

# Flux deploys (manifests in github.com/ducks23/homelab-infra, apps/*/bible-app); these only look.
status:
	$(KUBECTL) -n $(NAMESPACE) get pods,svc,ingress -l app=bible-app

logs:
	$(KUBECTL) -n $(NAMESPACE) logs -f deployment/bible-app
