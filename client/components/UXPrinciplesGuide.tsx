import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

const UXPrinciplesGuide = () => {
  const [activeTab, setActiveTab] = useState<string>('nielsen');

  const nielsenPrinciples = [
    {
      id: 1,
      name: "Visibilidad del estado del sistema",
      description: "El sistema debe mantener siempre informados a los usuarios sobre lo que está ocurriendo, a través de retroalimentación apropiada en un tiempo razonable.",
      example: "Barras de progreso, indicadores de carga, confirmaciones después de acciones.",
      icon: "⏱️"
    },
    {
      id: 2,
      name: "Lenguaje del usuario",
      description: "El sistema debe hablar el lenguaje de los usuarios con palabras, frases y conceptos familiares, en lugar de términos orientados al sistema.",
      example: "Evitar jerga técnica, utilizar términos comunes del mundo financiero que los usuarios entienden.",
      icon: "💬"
    },
    {
      id: 3,
      name: "Control y libertad",
      description: "Los usuarios a menudo eligen funciones por error y necesitan una "salida de emergencia" claramente marcada.",
      example: "Botones para deshacer/cancelar acciones, confirmar antes de acciones destructivas.",
      icon: "🚪"
    },
    {
      id: 4,
      name: "Consistencia y estándares",
      description: "Los usuarios no deberían preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.",
      example: "Botones de acción primaria siempre del mismo color, iconos consistentes en toda la aplicación.",
      icon: "🔄"
    },
    {
      id: 5,
      name: "Prevención de errores",
      description: "Mejor que buenos mensajes de error es un diseño cuidadoso que evite que un problema ocurra en primer lugar.",
      example: "Validación en tiempo real de formularios, deshabilitar opciones inválidas.",
      icon: "🛡️"
    },
    {
      id: 6,
      name: "Reconocer mejor que recordar",
      description: "Minimizar la carga de memoria del usuario haciendo visibles los objetos, acciones y opciones.",
      example: "Menús visibles, autocompletado, sugerencias contextuales.",
      icon: "🧠"
    },
    {
      id: 7,
      name: "Flexibilidad y eficiencia",
      description: "Los aceleradores pueden hacer más rápida la interacción para usuarios expertos, permitiendo que el sistema atienda tanto a usuarios inexpertos como experimentados.",
      example: "Atajos de teclado, filtros avanzados, funciones de búsqueda.",
      icon: "⚡"
    },
    {
      id: 8,
      name: "Diseño estético y minimalista",
      description: "Los diálogos no deben contener información irrelevante o raramente necesaria.",
      example: "Interfaces limpias, información jerarquizada, eliminación de elementos decorativos sin propósito.",
      icon: "✨"
    },
    {
      id: 9,
      name: "Ayudar a reconocer/diagnosticar/recuperar errores",
      description: "Los mensajes de error deben expresarse en lenguaje sencillo, indicar el problema y sugerir una solución constructiva.",
      example: "Mensajes de error específicos como 'El campo de correo electrónico requiere un @ - Ejemplo: usuario@dominio.com'.",
      icon: "🚨"
    },
    {
      id: 10,
      name: "Ayuda y documentación",
      description: "Aunque es mejor que el sistema se use sin documentación, puede ser necesario proporcionar ayuda y documentación.",
      example: "Tooltips contextuales, tours guiados, preguntas frecuentes accesibles.",
      icon: "📚"
    }
  ];

  const gestaltPrinciples = [
    {
      id: 1,
      name: "Proximidad",
      description: "Los elementos cercanos entre sí tienden a percibirse como un grupo.",
      example: "Agrupar etiquetas con sus campos de formulario, elementos de navegación juntos.",
      icon: "🔍"
    },
    {
      id: 2,
      name: "Similitud",
      description: "Los elementos que comparten características visuales similares se perciben como relacionados.",
      example: "Todos los botones de acción primaria del mismo color, iconos del mismo estilo para funciones similares.",
      icon: "👥"
    },
    {
      id: 3,
      name: "Continuidad",
      description: "Los elementos dispuestos en una línea o curva se perciben como más relacionados que los que no siguen un patrón.",
      example: "Menús horizontales, pasos de proceso en línea, alineación de elementos en formularios.",
      icon: "📏"
    },
    {
      id: 4,
      name: "Cierre",
      description: "La mente tiende a percibir formas completas incluso cuando falta información.",
      example: "Bordes parciales alrededor de grupos de contenido, elementos que sugieren una forma completa.",
      icon: "⭕"
    },
    {
      id: 5,
      name: "Figura-Fondo",
      description: "La percepción separa automáticamente los objetos en un primer plano (figura) y un fondo.",
      example: "Modales con overlay oscuro, tarjetas elevadas sobre el fondo, botones que destacan visualmente.",
      icon: "🖼️"
    },
    {
      id: 6,
      name: "Simetría",
      description: "Los elementos simétricos se perciben como pertenecientes al mismo grupo.",
      example: "Layouts equilibrados, distribución uniforme de tarjetas, elementos centrados.",
      icon: "⚖️"
    },
    {
      id: 7,
      name: "Destino común",
      description: "Elementos que se mueven en la misma dirección se perciben como un grupo.",
      example: "Animaciones coordinadas de elementos relacionados, transiciones de grupo.",
      icon: "🚶‍♂️"
    },
    {
      id: 8,
      name: "Conexión",
      description: "Los elementos unidos por líneas o curvas se perciben como más relacionados que los que no están conectados.",
      example: "Líneas que conectan pasos de un proceso, elementos dentro de un contenedor común.",
      icon: "🔗"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Guía de Principios de UX/UI</h1>
      <p className="text-gray-600 text-center mb-8">
        Esta guía explica los principios fundamentales de Nielsen y Gestalt aplicados en nuestra interfaz.
      </p>

      <Tabs defaultValue="nielsen" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="nielsen">Heurísticas de Nielsen</TabsTrigger>
          <TabsTrigger value="gestalt">Leyes de Gestalt</TabsTrigger>
        </TabsList>

        <TabsContent value="nielsen">
          <div className="space-y-4">
            <Card>
              <CardHeader className="bg-slate-50">
                <CardTitle>Las 10 Heurísticas de Nielsen</CardTitle>
                <CardDescription>
                  Reglas prácticas para evaluar si una interfaz es usable y ofrece buena experiencia de usuario
                </CardDescription>
              </CardHeader>
            </Card>

            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-4">
                {nielsenPrinciples.map(principle => (
                  <Card key={principle.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{principle.icon}</span>
                        <div>
                          <CardTitle className="text-base flex items-center gap-2">
                            {principle.name}
                            <Badge variant="outline" className="ml-2">#{principle.id}</Badge>
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{principle.description}</p>
                      <div className="bg-slate-50 p-3 rounded-sm border border-slate-100">
                        <p className="text-xs font-medium text-slate-600 mb-1">Ejemplo:</p>
                        <p className="text-xs text-slate-800">{principle.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </TabsContent>

        <TabsContent value="gestalt">
          <div className="space-y-4">
            <Card>
              <CardHeader className="bg-slate-50">
                <CardTitle>Leyes de Gestalt</CardTitle>
                <CardDescription>
                  Principios que explican cómo percibimos visualmente los patrones, formas y organizaciones
                </CardDescription>
              </CardHeader>
            </Card>

            <ScrollArea className="h-[600px] pr-4">
              <div className="space-y-4">
                {gestaltPrinciples.map(principle => (
                  <Card key={principle.id} className="overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{principle.icon}</span>
                        <CardTitle className="text-base">{principle.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{principle.description}</p>
                      <div className="bg-slate-50 p-3 rounded-sm border border-slate-100">
                        <p className="text-xs font-medium text-slate-600 mb-1">Ejemplo en UI:</p>
                        <p className="text-xs text-slate-800">{principle.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UXPrinciplesGuide;
